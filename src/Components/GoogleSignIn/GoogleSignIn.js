import React from 'react'
import { connect } from 'react-redux'
import {googleSignIn} from '../../Redux/auth/authActions';


const GoogleSignIn = ({googleSignIn}) => {
    return (
        <div>
            <button onClick={googleSignIn}>Sign In with Google</button>
        </div>
    )
}
var actions = ({
    googleSignIn
})
export default connect(null,actions)(GoogleSignIn)
