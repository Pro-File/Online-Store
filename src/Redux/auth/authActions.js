import {auth, firestore, GoogleAuthProvider, serverTime} from './../../Firebase/Firebase';
import { REMOVE_USER, SET_USER } from './AuthConstants';
import firebase from './../../Firebase/Firebase';


export var setUser = (user) => ({
    type: SET_USER,
    payload: {
        user,
    },
});
export var removeUser = () => ({
    type: REMOVE_USER
})
export var signup = ({fullName,email,password}) => async(dispatch) => {
    try {
        // Step 1: Create user on Auth Section
        var {user: {uid}} = await auth.createUserWithEmailAndPassword(email, password);

        // Step: 2 Save user's data to Firebase FireStore(DB)
        var userInfo = {
            uid,
            fullName,
            email,
            createdAt: serverTime()
        }
        await firestore.collection("users").doc(uid).set(userInfo);
        // console.log(userInfo);

        // Step : 3 Setting User in the State
        // dispatch({
        //     type: SET_USER,
        //     payload:{
        //         user: userInfo,
        //     }
        // })

    } catch (error) {
        console.log(error);
    }
}

export var signin = ({email, password}) => async(dispatch) => {
    try {
        // Sign in User with Auth
        var {user : {uid}} = await auth.signInWithEmailAndPassword(email,password);
        // Fetch User Data from FireStore(DB)
        // var UserData = await firestore.collection("users").doc(uid).get();
        // var {fullName, email: UserEmail} = UserData.data();
        // var userInfo = {
        //     uid,
        //     fullName,
        //     email: UserEmail,
        // }
        // //Set User Data to State
        // dispatch({
        //     type: SET_USER,
        //     payload:{
        //         user: userInfo,
        //     }
        // })
    } catch (error) {
        console.log(error);
    }
}

export var signout = () => async(dispatch) => {
    try {
        // Logging Out the User
        await auth.signOut();
        // Changing the State
        //  dispatch({
        //     type: REMOVE_USER,
        // })
    } catch (error) {
        console.log(error);
    }
}

export var googleSignIn = () => async(dispatch) => {
    try {
        var {user : {displayName, email, uid}, additionalUserInfo: {isNewUser}} = await auth.signInWithPopup(GoogleAuthProvider);

        if(isNewUser){
        var userInfo = {
            uid,
            fullName: displayName,
            email,
            createdAt: serverTime()
        }
        var userData = await firestore.collection("users").doc(uid).set(userInfo);
    }

        // var userInfo = {
        //     uid,
        //     fullName: displayName,
        //     email,
        //     createdAt: serverTime()
        // }
        // dispatch({
        //     type: SET_USER,
        //     payload:{
        //         user: userInfo,
        //     }
        // })
    } catch (error) {
        console.log(error);
    }
}


export var checkAuthStatus = () => async(dispatch) => {
    try {
        firebase.auth().onAuthStateChanged( async function(user){
            if(user){
        var {uid} = user;
        // Fetch User Data from FireStore(DB)
        var UserData = await firestore.collection("users").doc(uid).get();
        var {fullName, email: UserEmail} = UserData.data();
        var userDataforState = {
            uid,
            fullName,
            email: UserEmail,
        }
        //Set User Data to State
        dispatch(setUser(userDataforState))

            }
            else{
                dispatch(removeUser())
            }
        })
    } catch (error) {
        console.log(error);
    }
}