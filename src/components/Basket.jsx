import { ShoppingBasket } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({ cartOpen, closeCart = Function.prototype, order = [], removeFromOrder }) => {
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Basket" />
        </ListItem>
        <Divider />
        {order.length ? (
          order.map((item) => (
              <BasketItem key={item.name} {...item} removeFromOrder={removeFromOrder} />
          ))
        ) : (
          <ListItem> Корзина пуста </ListItem>
        )}
        <Divider />
        {order.length ? (
          <ListItem>
            <Typography>
              Общая стоимость:{' '}
              {order.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)}{' '}
              рублей.
            </Typography>
          </ListItem>
        ) : ''}
      </List>
    </Drawer>
  );
};

export default Basket;
