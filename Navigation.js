import React, { useState } from "react";
import "./Navigation.css"; // Import the CSS file for styling
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>


            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">WILDELIFE</div>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? "✖" : "☰"}
                    </button>
                    <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Collection">Collection</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </div>

            </nav>
            <Outlet />
            <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing insightful information about animals
            and fostering a love for wildlife and pets.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li></li>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Collection">Collection</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Wildlife Lane, Planet Earth</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Website Name. All Rights Reserved.</p>
      </div>
    </footer>
   
        </div>

    );
}

export default Navbar;
