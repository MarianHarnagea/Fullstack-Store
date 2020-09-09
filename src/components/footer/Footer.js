import React from "react";

import "./footer.scss";
import { Link } from "react-router-dom";

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="subscribe-section">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <h4>Subscribe to our newsletter:</h4>
            <p>
              A short sentence describing what someone will receive by
              subscribing
            </p>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="subscribe-form-container">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" />
                <button>subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 order-1 order-md-0 d-flex flex-column align-items-center">
            <h6>social-links</h6>
            <div className="socials">
              <Link to="/">
                <img src={facebook} alt="facebook" />
              </Link>
              <Link to="/">
                <img src={instagram} alt="instagram" />
              </Link>
              <Link to="/">
                <img src={twitter} alt="twitter" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <ul>
              <h6>links</h6>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collection/all">Collection</Link>
              </li>
              <li>
                <Link to="/contactus">About Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 d-flex order-2  order-md-0 justify-content-center">
            <div className="contact text-center">
              <h6>contact</h6>
              <p>Call Us at (333) 123 456 </p>
              <p>john@doe.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
