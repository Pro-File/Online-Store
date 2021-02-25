import React from 'react'
import { connect } from 'react-redux'
import {AddToCart, EliminateFromCart, RemoveFromCart} from './../../../Redux/cart/cartActions';

const CheckOutItem = ({AddToCart,RemoveFromCart,EliminateFromCart,item}) => {
    return (
        <div>
            <h3>---------------------------------</h3>
            <h1>{item.title}
            <button className="cancel"  onClick={ ()=>EliminateFromCart(item)}>X</button>
            </h1>
            <h2>
            <button className="add" onClick={ ()=>AddToCart(item)}>+</button>
                {item.quantity} 
            <button className="remove" onClick={ ()=> RemoveFromCart(item)}>-</button>
            </h2>
            <h1>{item.cost}</h1>
    {/* {item.products.map((product) => <ProductCard key={product.title} {...product} />)} */}
        </div>
    )
}

var actions = ({
    AddToCart,
    RemoveFromCart,
    EliminateFromCart,
})

export default connect(null,actions)(CheckOutItem)