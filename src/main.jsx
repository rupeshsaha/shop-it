import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById("root")).render(
  <CartProvider>
  <AuthProvider>
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
      </BrowserRouter>
    </AuthProvider>
      </CartProvider>

);
