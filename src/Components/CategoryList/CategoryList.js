import React from 'react'
import CategoryItem from './CategoryItem/CategoryItem'

const CategoryList = ({categorizedProducts}) => {
    // console.log(categorizedProducts);

    return (
        <div>
        <h1 align="center">Category</h1>
{/* {categorizedProducts.map((category) => <CategoryItem key={category.category} {...category}/>)} */}
{/* Note: If There are more properties that you want to pass in Other File then use
Spread Operator {...category} and destructure it in the file */}

{categorizedProducts.map((category) => <CategoryItem key={category.category} category = {category}/>)}
        </div>
    )
}

export default CategoryList
