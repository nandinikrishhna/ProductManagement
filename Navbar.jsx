import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Button component={Link} to="/" className="navbar-brand">
          <img src="\logo.png" alt="Logo"  />
          A to Z
        </Button>
        <Button color="inherit" component={Link} to="/" className="navbar-link">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/add-product" className="navbar-link">
          Add Product
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
