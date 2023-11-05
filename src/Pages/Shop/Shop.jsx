import React from 'react'
import {PRODUCTS} from "../../Assets/Products/products"
import Product from '../Product/Product'
import "./Shop.css"
const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>PedroTech Shop</h1>
        </div>

        <dti className="products">
            {PRODUCTS.map((product)=>(
                <Product data={product}/>
            ))}
        </dti>
    </div>
  )
}

export default Shop
