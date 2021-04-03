import React from 'react'
import { connect } from 'react-redux';
import { openModal } from '../../Redux/modals/modalActions';
import {auth} from './../../Firebase/Firebase';
const Home = ({openModal}) => {
    console.log(auth);
    return (
        <div>
            <h1>Home</h1>
            <button onClick = { ()=> {openModal({modalType : "OpenTestModal", modalProps : {test: "Welcome to Modal"}})}}>Open Modal</button>
        </div>
    )
}
var actions = ({
    openModal,
})

export default connect(null, actions)(Home)
