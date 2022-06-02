import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Suspense } from 'react';
import theme from '../src/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </ThemeProvider>
  
  </React.StrictMode>
 
);
