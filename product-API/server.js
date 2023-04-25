require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

const url = process.env.DB_URL;

app.use(cors());
app.use(express.json());

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

app.post("/products", async (req, res) => {
  try {
    res.json(await Product.create(req.body));
  } catch (error) {
    console.log(error);
  }
});

app.get("/products/productsId", (req, res) => {
  res.send("Fetch specific products with ID:" + req.params.productId);
});

app.delete("/products/:productId", async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params?.productId });
  } catch (e) {
    res.json(`Something went wrong deleting: ${req.params?.productId}`);
  } finally {
    res.json(`Deleted: ${req.params?.productId}`);
  }
});

app.patch("/products/:productId", async (req, res) => {
  try {
    await Product.updateOne({
      title: req.body?.title,
      price: req.body?.price,
      stock: req.body?.stock,
      description: req.body?.description,
    });
  } catch (e) {
    res.json("Something went wrong updating");
  }
});

app.listen(port, () => {
  console.log(`Server running on Port: ${port}`);
});
