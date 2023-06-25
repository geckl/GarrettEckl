import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import SiteRoutes from "./Routes";
import { Theme } from './Style/Style';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme(Theme)}>
      <BrowserRouter>
        <SiteRoutes />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

