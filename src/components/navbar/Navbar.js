import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import mobileMenuBtn from "../../assets/home-imgs/mobile_menu_btn.png";
import mobileLogo from "../../assets/home-imgs/logo_mobile.png";
import cartMobile from "../../assets/home-imgs/cart_icon.png";
import arrowDown from "../../assets/home-imgs/down-arrow.png";
import Dropdown from "./Dropdown";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/authActions";

function Navbar({ openCart, openMenu }) {
  const [navdropdown, setNavDropdown] = useState(false);
  const auth = useSelector(({ auth }) => auth);
  const state = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleNavDropdown = () => {
    setNavDropdown(true);
  };

  const handleCloseDropdown = () => {
    setNavDropdown(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <div className="mobile-menu-btn" onClick={openMenu}>
          <img src={mobileMenuBtn} alt="menu" />
        </div>

        <div className="logo-mobile">
          <Link to="/">
            <img src={mobileLogo} alt="logo-mobile" />
          </Link>
        </div>

        <div className="nav-links ">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="/collection/all"
                onClick={handleCloseDropdown}
                onMouseEnter={handleNavDropdown}
              >
                Catalog <img src={arrowDown} alt="arrowDown" />
              </Link>
            </li>
            <li>
              <Link to="/contactus">Contact US</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            {auth.role === "admin" ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>

        <div className="login-cart">
          {auth.isAuthentificated ? (
            <h4>
              <Link onClick={() => dispatch(logout())} to="#">
                Logout
              </Link>
            </h4>
          ) : (
            <h4>
              <Link to="/login">Login</Link>
            </h4>
          )}

          <div className="cart-md" onClick={openCart}>
            <h4>Cart</h4>
            <span>{state.cart !== null ? state.cart.length : 0}</span>
          </div>
        </div>

        <div className="cart-mobile" onClick={openCart}>
          <img src={cartMobile} alt="cartMobile" />
          <span>{state.cart !== null ? state.cart.length : 0} </span>
        </div>
      </div>
      <Dropdown
        navdropdown={navdropdown}
        handleCloseDropdown={handleCloseDropdown}
      />
    </div>
  );
}

export default Navbar;
