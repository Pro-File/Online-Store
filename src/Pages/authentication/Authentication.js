import React from 'react'
import GoogleSignIn from '../../Components/GoogleSignIn/GoogleSignIn'
import SigninForm from '../../Components/SigninForm/SigninForm'
import SignOut from '../../Components/SignOut/Signout'
import SignUpForm from '../../Components/SignUpForm/SignUpForn'

const Authentication = () => {
    return (
        <div>
            <h1>Authentication</h1>
            <SignUpForm/>
            <GoogleSignIn/>
            <SigninForm/>
            <SignOut/>
        </div>
    )
}

export default Authentication
