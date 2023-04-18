import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const ManageProducts = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
  fetchProducts()
}, [])


const fetchProducts = async () => {
  console.log('fetch') 
  try {
    //const response = fetch('/api/products')
    //const response = fetch('')
    //
    const res = await axios("http://localhost:3000/products");
    setProducts(res.data);
    console.log(res);
    //const data = await response.json();
    console.log(data)
  } catch (error) {}
}

const deleteProduct = async (id) => {
  console.log(id) 
  try {
    await axios("http://localhost:3000/product/" + id, {
      method: 'DELETE',
  });
 
    console.log('Delete');
  } catch (error) {}
  fetchProducts();
}

  return (
    <div>
    <div>ManageProducts</div>

    <table>

      <thead>
        <tr align>Title</tr>
        <tr>Category</tr>
        <tr>Price</tr>
        <tr>Stock</tr>
      </thead>

      <tbody>
      {
        products.map(product => {
          return <tr key={product['_id']}>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td><button>Edit</button></td>
            <td><button onClick={() => { deleteProduct(product['_id'])}}>Delete</button></td>

            </tr>

          
        })
      } 
      </tbody>
    </table>
    </div>
  )
}

export default ManageProducts

