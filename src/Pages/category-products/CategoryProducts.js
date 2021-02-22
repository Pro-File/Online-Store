import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../Components/ProductCard/ProductCard';
import {fetchCategoryProducts, removeAllProducts} from './../../Redux/products/productActions';

const CategoryProducts = ({match: {params : {category}}
    ,fetchCategoryProducts
    , products
    , removeAllProducts
}) => {
    useEffect(() => {
        console.log("Mount");
        fetchCategoryProducts(category); 
        return ()=>{
            removeAllProducts();
            console.log("UnMount");
        }
    },[])
    return (
        <div>
            <h1 align="center">{category}-Products Page</h1>
            {products.map((product)=>               
                <ProductCard key={product.photo} {...product}/>
            )}
        </div>
    )
}
var actions = {
    fetchCategoryProducts,
    removeAllProducts,
}
var mapState = (state) => ({
    products: state.products
})

export default connect(mapState,actions)(CategoryProducts)
