import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', product);
  };

  return (
    <Container className="container">
      <h1 className="form-title">Add Product</h1>
      <form onSubmit={handleSubmit} className="form">
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Product Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={product.name}
          onChange={handleChange}
          className="form-input"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          type="text"
          id="description"
          autoComplete="description"
          multiline
          rows={4}
          value={product.description}
          onChange={handleChange}
          className="form-input"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="price"
          label="Price"
          type="number"
          id="price"
          autoComplete="price"
          value={product.price}
          onChange={handleChange}
          className="form-input"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="category"
          label="Category"
          type="text"
          id="category"
          autoComplete="category"
          value={product.category}
          onChange={handleChange}
          className="form-input"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="submit-button"
        >
          Add Product
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;
