import React from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();

  const { category, description, image, stock, title } = location.state;
  
  return (
    <div className="product">
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
    </div>
  );
};

export default Product;
