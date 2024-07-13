import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container className="container">
      <h1 className="container-title">Product Dashboard</h1>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card className="product-card">
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                className="product-image"
              />
              <CardContent>
                <h2>{product.title}</h2>
                <p className="product-price">${product.price}</p>
                <p className="product-category">{product.category}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
