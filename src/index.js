import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Suspense } from 'react';
import theme from '../src/theme';

import GlobalStyles from './components/GlobalStyles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={null}>
        <GlobalStyles>
          <App />
        </GlobalStyles>


      </Suspense>
    </ThemeProvider>

  </React.StrictMode>

);
