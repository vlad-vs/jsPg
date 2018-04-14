import React from 'react';
import Button from './Button'
import Category from "./Category";

function Product(props) {

    let {product} = props;

    return (
        <div className = "product">
        <h3>{product.category} : {product.name}</h3>
    <div>Price: {product.price}</div>
    <div><Button stocked = {product.stocked}/></div>
    </div>
)
}


export default Product;