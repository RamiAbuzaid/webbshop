import React from 'react'
import ApiProducts from '../components/ApiProducts'
import "../App.css"

const Products = () => {
  return (
    <>
      <h1 className='products-title'>Products</h1>
      <ApiProducts />
    </>
  )
}

export default Products