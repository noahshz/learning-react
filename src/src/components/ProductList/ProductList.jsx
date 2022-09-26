import React from 'react'
import Product from '../Product/Product'
import { useState, useEffect } from 'react'

const ProductList = () => {
  // states
  const [prods, setProds] = useState(() => {
    const prods = localStorage.getItem("products")
    const parsed = JSON.parse(prods);
    return parsed || [];
  })
  const [count, setCount] = useState(0)
  const [name, setName] = useState("EMPTY")
  const [description, setDescription] = useState("EMPTY")
  const [price, setPrice] = useState(0.00)
  
  const countProducts = () => {
    setCount(prods.length);
  }
  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeDesc = (e) => {
    setDescription(e.target.value)
  }
  const changePrice = (e) => {
    setPrice(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    const newProducts = [...prods, {name: name, description: description, price: price}]
    setProds(newProducts)
    console.log(newProducts);
  }

  useEffect(() => {
    countProducts()
    localStorage.setItem("products", JSON.stringify(prods))
  }, [prods])

  return (
    <div>
        <h1>ProductList</h1>
        <h3>Vorschau:</h3>
        <form>
          <input onChange={changeName} type="text" placeholder='Name'></input>
          <input onChange={changeDesc} type="text" placeholder='Description'></input>
          <input onChange={changePrice} type="number" placeholder='price'></input>
          <input onClick={submit} type="submit" value="Add Product"></input>
        </form>
        <p>Name: "{name}", Beschreibung: "{description}", Preis: "{price}"</p>
        <p>Count Products: {count}</p>
        {
        prods.map((item, index) => {
          return <Product name={item.name} description={item.description} price={item.price} key={index}/>
        })
        }
    </div>
  )
}

export default ProductList
