import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../ProductCard/ProductCard'
import './CategoryItem.css'

// Remember that category is a Object having category and products in it.
const CategoryItem = ({category}) => {
    return (
        <div>
             <h3>---------------------------------</h3>
            <h1>{category.category}</h1>
            {category.products.map((product) => <ProductCard key={product.title} {...product} />)}
            <Link to={`/category-products/${category.category}`}>
            <button className="view-more">VIEW MORE</button>
            </Link>
        </div>
    )
}

export default CategoryItem
