import React from 'react'
import { connect } from 'react-redux';
import './ProductCard.css';
import {AddToCart, EliminateFromCart, RemoveFromCart} from './../../Redux/cart/cartActions';
import { Link } from 'react-router-dom';
const ProductCard = ({AddToCart,RemoveFromCart,EliminateFromCart,...product}) => {
    var {title, cost, id} = product;
    return (
        <div>
            <h3>{title} - ${cost} 
            <Link to={`/product/${id}`}>
            <button className="add">view more</button>
            </Link>
            <br/>
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
