import React, {useState} from 'react';
import { connect } from 'react-redux';
import {signup} from './../../Redux/auth/authActions';

const SignUpForm = ({signup}) => {
    var [fullName, setFullName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var HandleFormInput = (e) =>{
        e.preventDefault();
        var cred = {
            fullName,
            email,
            password,
        }
        signup(cred);
    }
    return (
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={HandleFormInput}>
                <input value={fullName} onChange={ (e) => setFullName(e.target.value)} type="text" placeholder="Name"/>
                <input value={email} onChange={ (e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value={password} onChange={ (e) => setPassword(e.target.value)} type="text" placeholder="pass"/>
            <button type="submit">Sign Up</button>
            </form> 
        </div>
    )
}
var actions = {
    signup,
}
export default connect(null, actions)(SignUpForm)
