import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import CheckOutItem from './CheckOutItem/CheckOutItem';
import {fetchProducts, removeAllProducts} from './../../Redux/products/productActions';


const CheckOutList = ({fetchProducts,removeAllProducts,cartItems}) => {
    useEffect(() => {
        // console.log(cartItems);
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
        {cartItems.map((item) => <CheckOutItem key={item.photo} item = {item}/>)}
        </div>
    )
}

var actions ={
    fetchProducts,
    removeAllProducts,
}

export default connect(null,actions)(CheckOutList)
