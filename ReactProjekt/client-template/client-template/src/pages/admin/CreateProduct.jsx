import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [category, setCategory] = useState();

  const submitForm = async (event) => {
    event.preventDefault();

    const formData = {
      title,
      description,
      price,
      stock,
      category,
    };
    
    const postData = await axios.post("http://localhost:5001/products", formData);
  
    navigate("/admin/manage-products");
  };

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

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Link to='/'>Back to Home Page</Link>
      <form className='create-product-form' action='submit' name='create-products' onSubmit={submitForm}>
        <TextField id='standard-basic' label='Title' variant='standard' name='title' type='text' onChange={onTitleChange} required />
        <TextField
          id='standard-basic'
          label='Description'
          variant='standard'
          name='description'
          type='text'
          onChange={onDescriptionChange}
          required
        />
        <TextField id='standard-basic' label='Price' variant='standard' name='price' onChange={onPriceChange} type='number' required />
        <TextField id='standard-basic' label='Stock' variant='standard' name='stock' onChange={onStockChange} type='number' required />
        <TextField id='standard-basic' label='Category' variant='standard' name='category' onChange={onCategoryChange} type='text' required />
        <Button sx={{ marginTop: "2rem" }} variant='contained' type='submit'>
          Create Product
        </Button>
      </form>
    </>
  );
};

export default CreateProduct;
