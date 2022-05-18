import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const Snack = ({ isOpen, handleClose = Function.prototype }) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={1500} onClose={handleClose}>
      <Alert severity="success">Товар добавлен в корзину</Alert>
    </Snackbar>
  );
};

export default Snack;
