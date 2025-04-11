import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Discover ShopIt</a>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-section">
          <h4>Consumer Policy</h4>
          <a href="#">Return Policy</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Security</a>
          <a href="#">Privacy</a>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>
        <div className="footer-section contact-section">
          <h4>Mail Us:</h4>
          <p>ShopIt Private Limited,</p>
          <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103, Karnataka, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ShopIt — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
