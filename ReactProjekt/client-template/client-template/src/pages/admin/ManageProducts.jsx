import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const ManageProducts = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
  fetchProducts()
}, [])


const fetchProducts = async () => {
  console.log('Hej') 
  try {
    //const response = fetch('/api/products')
    //const response = fetch('')
    const res = await axios("/api/products");
    setProducts(res.data);
    console.log(res);
    //const data = await response.json();
    console.log(data)
  } catch (error) {
  
  
}
}

  return (
    <div>
    <div>ManageProducts</div>

    <section>
      {
        products.map(product => {
          return <article key={product['_id']}>
            <p>{product.title}</p>

          </article>
        })
      } 
      
    </section>
    </div>
  )
}

export default ManageProducts

