import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
 import "../../src/App.css" 
export default function ApiProducts() {
  const [apiData, setApiData] = useState([]);

  async function getData() {
    const res = await axios("/api/products");
    setApiData(res.data);
    console.log(res);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {apiData?.map((product) => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductList(props) {
  const { product } = props;

  return (
    <>
      <img className="product-image" src={product?.image} alt="fruit image" />
      <pre>{product?.title}</pre>
      <pre>{product?.price}</pre>
      <input defaultValue={product.stock} />
      <button>Add to cart</button>
      <h6>{product?.stock < 1 ? "Not in stock" : "In Stock"}</h6>
      <Link to="/product" state={product}>
      <h2>Read more</h2>
      </Link>
    </>
  );
}
