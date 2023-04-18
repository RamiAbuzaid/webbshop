require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const url = process.env.DB_URL;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB!");
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
connectToMongoDB();

const Product = require("./models/Product");

app.get("/products", async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (error) {
    console.log(error);
  }
});
app.post("/products/gg", async (req, res) => {
  try {
    res.json(await Product.create(
      {
        "title": "Ramis title",
        "description": "gggg",
        "price": 939393,
        "stock": 94,
        "category": "min categoru",
      }
    ));
  } catch (error) {
    console.log(error);
  }
});
app.get("/products/productsId", (req, res) => {
  console.log(reg.params.productId);
  res.send("Fetch specific products with ID:" + reg.params.productId);
});

app.listen(port, () => {
  console.log(`Server running on Port: ${port}`);
});
