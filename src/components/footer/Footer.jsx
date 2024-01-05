import React from "react";
import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="top">
        <div className="topleft">
          <div className="section">
            <ul>
              <h5>Section</h5>
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQS</li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <h5>Section</h5>
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQS</li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <h5>Section</h5>
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQS</li>
            </ul>
          </div>
        </div>
        <div className="subscribe">
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <input type="text" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="copyright">
          © 2023 Company, Inc. All rights reserved.
        </div>
        <div className="logo">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
