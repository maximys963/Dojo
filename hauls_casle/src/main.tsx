import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const customTheme = extendTheme({ config });

import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={customTheme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)
