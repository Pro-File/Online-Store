import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem/CartItem'
import {fetchProducts, removeAllProducts} from './../../Redux/products/productActions';


const CartList = ({fetchProducts,removeAllProducts,cartItems}) => {
    useEffect(() => {
        console.log(cartItems);
        fetchProducts();
        // console.log("Mount");
       return ()=>{
           removeAllProducts();
        //    console.log("UnMount");
       }
    },[])
    return(
        <div>
            <h1>Cart List</h1>
        {cartItems.map((item) => <CartItem key={item.photo} item = {item}/>)}
        <button className="add">Check Out</button>
        </div>
    )
}

var actions ={
    fetchProducts,
    removeAllProducts,
}
var mapState = (state) =>({
        cartItems :state.cart,
})

export default connect(mapState,actions)(CartList)
