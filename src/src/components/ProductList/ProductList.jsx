import React from 'react'
import Product from '../Product/Product'

const products = [
  {"name": "Prod 1544", "description": "nice little description", "price": 101.50},
  {"name": "Prod 21", "description": "nice little description", "price": 67.50},
  {"name": "Prod 54", "description": "nice little description", "price": 31.50},
  {"name": "Prod 1213123", "description": "nice little description", "price": 9999.50}
]

const ProductList = () => {
  return (
    <div>
        <h1>ProductList</h1>
        {
        products.map((item, index) => {
          return <Product name={item.name} description={item.description} price={item.price} key={index}/>
        })
        }
    </div>
  )
}

export default ProductList
