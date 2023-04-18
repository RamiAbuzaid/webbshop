import React from "react";
import { Link, useLocation } from "react-router-dom";

const Product = (props) => {
  const location = useLocation();

  const { category, description, id, image, stock, title } = location.state;

  return (
    <>
      <button>
        <a href="/">Go Back</a>
      </button>
      <img src={image} alt="fruit image" />
      <pre>{title}</pre>
      <pre>{category}</pre>
      <pre>{description}</pre>
      <input defaultValue={stock} />
      <button>Add to cart</button>
      <h6>{stock < 1 ? "Not in stock" : "In Stock"}</h6>
    </>
  );
};

export default Product;
