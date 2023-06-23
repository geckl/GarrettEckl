import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Landing } from './Pages/Landing';
import {Theme} from './Style/Style'
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme(Theme)}>
    <Landing />
    </ChakraProvider>
  </React.StrictMode>
);

