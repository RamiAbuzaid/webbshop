import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../src/App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";

export default function ApiProducts() {
  const [apiData, setApiData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  console.log(cartProducts, "sjsjsj");

  async function getData() {
    const res = await axios("/api/products");
    setApiData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(cartVisible, "ss");

  return (
    <div className="container">
      <div className="cart-icon">
        <AiOutlineShoppingCart onClick={() => setCartVisible(true)} />
        <pre className="cart-counter">{cartCount}</pre>
      </div>
      {cartVisible ? (
        <Cart cartProducts={cartProducts} setCartVisible={setCartVisible} />
      ) : null}
      {apiData?.map((product, idx) => (
        <ProductList
          key={idx}
          product={product}
          cartCount={cartCount}
          setCartCount={setCartCount}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      ))}
    </div>
  );
}

function ProductList(props) {
  const { product, setCartCount, cartProducts, setCartProducts } = props;

  const addToCartCount = () => setCartCount((prev) => prev + 1);

  return (
    <div className="product">
      <img className="product-img" src={product?.image} alt="product image" />
      <pre>{product?.title}</pre>
      <pre>{product?.price}</pre>
      <section className="button-input">
        {" "}
        <input defaultValue={product.stock} />
        <button
          onClick={() => {
            addToCartCount();
            setCartProducts([...cartProducts, product]);
          }}
        >
          Add to cart
        </button>
      </section>
      <h6>{product?.stock < 1 ? "Not in stock" : "In Stock"}</h6>
      <Link to="/product" state={product}>
        <h2>Read more</h2>
      </Link>
    </div>
  );
}
