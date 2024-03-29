import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";

const Product = () => {
  const location = useLocation();

  const { category, description, image, stock, title } = location.state;

  return (
    <>
    <Header />
    <div
      className="product"
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} alt="fruit image" />
      <pre>{title}</pre>
      <pre>{category}</pre>
      <pre>{description}</pre>
      <input defaultValue={stock} />
      <button>Add to cart</button>
      <h6>{stock < 1 ? "Not in stock" : "In Stock"}</h6>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
    </>
  );
};

export default Product;
