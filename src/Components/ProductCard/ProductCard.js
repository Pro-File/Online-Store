import React from 'react'
import { connect } from 'react-redux';
import {AddToCart} from './../../Redux/cart/cartActions';
const ProductCard = ({AddToCart,...product}) => {
    var {title, cost} = product;
    return (
        <div>
            <h3>{title} - ${cost} <button onClick={ ()=>AddToCart(product)}>Add to Cart</button></h3>
        </div>
    )
}

var actions = ({
    AddToCart,
})
export default connect(null,actions)(ProductCard)
