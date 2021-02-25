import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import {FetchSpecificProduct} from './../../Redux/products/productActions';
import ProductCard from './../../Components/ProductCard/ProductCard';

const Product = ({match: {params : {productId}},FetchSpecificProduct}) => {
    var [product, setProduct] = useState({})
    useEffect(async() => {
        
        var ProductData = await FetchSpecificProduct(productId);
        setProduct(ProductData);
        // return () => {
           
        // }
    },[])
    return (
        <div>
            <h1>Product Information</h1>
            {/* product.title && is used to avoid the jerk in rendering */}
           {product.title && <ProductCard {...product}/> }
        </div>
    )
}

var actions = ({
    FetchSpecificProduct
})

export default connect(null, actions)(Product)
