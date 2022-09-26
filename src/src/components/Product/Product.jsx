import React from 'react'
import './Product.css'
import { useState } from 'react'

const Product = ({name, description, price}) => {
  const [xDescription, setDescription] = useState("click to reveal real description");

  const changeDesc = () => {
    if(xDescription === "click to reveal real description") {
      setDescription(description);
    } else {
      setDescription("click to reveal real description");
    }
  }

  return (
    <div className='product' onClick={changeDesc}>
      <h1>{name}</h1>
      <p>{xDescription}</p>
      <p>{price} €</p>
    </div>
  )
}

export default Product