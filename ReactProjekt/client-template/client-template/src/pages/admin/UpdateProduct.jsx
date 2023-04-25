import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

const UpdateProduct = () => {
  const location = useLocation();

  console.log(location, "sksks");

  const [title, setTitle] = useState(location.state?.title);
  const [description, setDescription] = useState(location.state?.description);
  const [price, setPrice] = useState(location.state?.price);
  const [stock, setStock] = useState(location.state?.stock);
  const [changePage, setChangePage] = useState(false);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onPriceChange = (event) => {
    setPrice(event.target.value);
  };

  const onStockChange = (event) => {
    setStock(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const updatedFormData = {
      title,
      description,
      price,
      stock,
    };
    await axios.patch(`/api/products/${location.state?._id}`, updatedFormData);
  };

  console.log(location.state?.title, "sksks");
  return (
    <>
      <Header />
      <form
        className="create-product-form"
        action="submit"
        name="create-products"
        onSubmit={submitForm}
      >
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          name="title"
          type="text"
          onChange={onTitleChange}
          required
          value={title}
        />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          name="description"
          type="text"
          onChange={onDescriptionChange}
          required
          value={description}
        />
        <TextField
          id="standard-basic"
          label="Price"
          variant="standard"
          name="price"
          onChange={onPriceChange}
          type="number"
          required
          value={price}
        />
        <TextField
          id="standard-basic"
          label="Stock"
          variant="standard"
          name="stock"
          onChange={onStockChange}
          type="number"
          required
          value={stock}
        />
        <Button sx={{ marginTop: "2rem" }} variant="contained" type="submit">
          Update product
        </Button>
      </form>
    </>
  );
};

export default UpdateProduct;
