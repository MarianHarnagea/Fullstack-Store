import React from "react";
import mainImage from "../../assets/home-imgs/header-main-image.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="gold-img"></div>
      <div className="main-img-container">
        <div className="main-img">
          <h1>Discover our full range of headphones</h1>
          <img src={mainImage} alt="" />
          <Link to="/collection/headphones">
            <button>Discover It</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
