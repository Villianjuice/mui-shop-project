import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = ({openCart, orderLength}) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton onClick={openCart}>
        <Badge badgeContent={orderLength} color="secondary"><ShoppingBasket /></Badge>          
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
