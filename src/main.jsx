import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import {CartProvider} from "./context/CartContext/CartContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <App />
    <ToastContainer />
    </CartProvider>
  </React.StrictMode>,
)