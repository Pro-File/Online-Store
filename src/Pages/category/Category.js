import React ,{useEffect}  from 'react'
import {fetchProducts, removeAllProducts} from './../../Redux/products/productActions';
import { connect } from 'react-redux'
import { categorizeProducts } from '../../Utility/CategorizeProducts';
import CategoryList from '../../Components/CategoryList/CategoryList';

const Category = ({fetchProducts, categorizedProducts, removeAllProducts}) => {
    // console.log(categorizedProducts);
    useEffect(() => {
        // console.log("Mount");
       fetchProducts();
       return ()=>{
           removeAllProducts();
        //    console.log("UnMount");
       }
    },[])
  
    return(
        <div>
        {/* Passing the Categorized Products to CategoryList to Render them */}
        <CategoryList categorizedProducts = {categorizedProducts}/>
        </div>
    )
}
var actions ={
    fetchProducts,
    removeAllProducts,
}
var mapState = (state) => ({
    categorizedProducts : categorizeProducts(state.products),
})
export default connect(mapState,actions)(Category)
