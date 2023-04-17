import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <img src={product?.image} alt="fruit image" />
      <pre>{product?.title}</pre>
      <pre>{product?.price}</pre>
      <input defaultValue={product.stock} />
      <button>Add to cart</button>
      <h6>{product?.stock < 1 ? "Not in stock" : "In Stock"}</h6>
      <h1>Read more</h1>
    </>
  );
}
