import React from 'react'
import { Link } from 'react-router-dom'
import CartList from '../../Components/CartList/CartList'

const Cart = () => {
    return (
        <div>
            <h1 align="center">CART</h1>
            <CartList/>
            <Link to="/checkout">
            <button className="add">Check Out</button>
            </Link>
        </div>
    )
}

export default Cart
