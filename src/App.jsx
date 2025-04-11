import React, { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import { AuthContext } from './context/AuthContext'

const App = () => {
  const {loggedInUser} = useContext(AuthContext)
  return (
    <div className="app-layout">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={loggedInUser ? <Cart />: <Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App