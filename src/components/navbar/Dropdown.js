import React from "react";
import catalogAccessories from "../../assets/home-imgs/catalog_accessories.jpg";
import catalogEarphones from "../../assets/home-imgs/catalog_earphones.jpg";
import catalogHeadphones from "../../assets/home-imgs/catalog_headphones.jpg";
import { Link } from "react-router-dom";

const Dropdown = ({ navdropdown, handleCloseDropdown }) => {
  return (
    <div
      onMouseLeave={handleCloseDropdown}
      className={
        navdropdown
          ? "navbar-dropdown navbar-dropdown-active"
          : "navbar-dropdown"
      }
    >
      <div className="drop-down-link">
        <Link to="/collection/headphones" onClick={handleCloseDropdown}>
          <div className="link-image">
            <img src={catalogHeadphones} alt="/collection/headphones" />
          </div>

          <h3>Headphones</h3>
        </Link>
      </div>
      <div className="drop-down-link">
        <Link to="/collection/earphones" onClick={handleCloseDropdown}>
          <div className="link-image">
            <img src={catalogEarphones} alt="catalogEarphones" />
          </div>

          <h3>Earphones</h3>
        </Link>
      </div>
      <div className="drop-down-link">
        <Link to="/collection/accessories" onClick={handleCloseDropdown}>
          <div className="link-image">
            <img src={catalogAccessories} alt="catalog_accessories" />
          </div>

          <h3>accessories</h3>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
