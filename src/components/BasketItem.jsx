import { Close } from '@mui/icons-material';
import {  ListItem, Typography } from '@mui/material';

const BasketItem = ({ id, name, price, quantity, removeFromOrder }) => {
  return (
    <ListItem>
      <Typography  >{name} {price}руб x{quantity}</Typography>
        <Close onClick={() => removeFromOrder(id)} />
    </ListItem>
  );
};

export default BasketItem;
