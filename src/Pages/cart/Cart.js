import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {generateOrder} from './../../Redux/orders/orderActions';
import CartList from '../../Components/CartList/CartList'

const Cart = ({generateOrder}) => {
    return (
        <div>
            <h1 align="center">CART</h1>
            <CartList/>
            {/* <Link to="/checkout"> */}
            <button className="add" onClick = {generateOrder}>Check Out</button>
            {/* </Link> */}
        </div>
    )
}

var actions = ({
    generateOrder,
})
export default connect(null,actions)(Cart)
