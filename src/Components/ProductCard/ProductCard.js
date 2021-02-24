import React from 'react'
import { connect } from 'react-redux';
import './ProductCard.css';
import {AddToCart, EliminateFromCart, RemoveFromCart} from './../../Redux/cart/cartActions';
const ProductCard = ({AddToCart,RemoveFromCart,EliminateFromCart,...product}) => {
    var {title, cost} = product;
    return (
        <div>
            <h3>{title} - ${cost} 
            <button className="cancel"  onClick={ ()=>EliminateFromCart(product)}>X</button>
            <br/>
            <button className="add" onClick={ ()=>AddToCart(product)}>+</button>
            <button className="remove" onClick={ ()=> RemoveFromCart(product)}>-</button>
            </h3>
        </div>
    )
}

var actions = ({
    AddToCart,
    RemoveFromCart,
    EliminateFromCart,
})
export default connect(null,actions)(ProductCard)
