import React from 'react'
import { connect } from 'react-redux'
import {googleSignin} from '../../Redux/auth/authActions';


const GoogleSignIn = ({googleSignin}) => {
    return (
        <div>
            <button onClick={googleSignin}>Sign In with Google</button>
        </div>
    )
}
var actions = ({
    googleSignin
})
export default connect(null,actions)(GoogleSignIn)
