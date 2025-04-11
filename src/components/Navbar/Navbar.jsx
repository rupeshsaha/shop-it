import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Navbar.css";
import { LogOut, ShoppingCartIcon, User, Menu } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedInUser(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token && !!loggedInUser);
  }, [loggedInUser]);

  return (
    <nav className="navbar">
      <div className="nav-left">
        
        <Link to="/" className="logo">
          ShopIt
        </Link>
      </div>

      

      <div className="nav-actions">
        <Link to="/cart" className="cart-btn">
          <ShoppingCartIcon />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="auth-btn">
            <LogOut size={18} />
            Logout
          </button>
        ) : (
          <Link to="/login" className="auth-btn">
            <User size={18} />
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
