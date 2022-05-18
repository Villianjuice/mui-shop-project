import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#d32f2f"
        }
    }
});

ReactDOM.render(
//   <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App  />
    </ThemeProvider>,
//   </React.StrictMode>,
  document.getElementById('root'),
);
