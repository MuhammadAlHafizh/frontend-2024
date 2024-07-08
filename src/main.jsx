import { ThemeProvider } from 'styled-components';
import theme from "./utils/constants/theme";
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
