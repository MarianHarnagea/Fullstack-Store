import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/homepage/Home";
import AllProducts from "./pages/products-pages/AllProducts";
import Accessories from "./pages/products-pages/Accessories";
import Earphones from "./pages/products-pages/Earphones";
import Headphones from "./pages/products-pages/Headphones";
import ProductDetails from "./pages/products-pages/ProductDetails";
import Blog from "./pages/blogPage/Blog";
import ContactUs from "./pages/contactUsPage/ContactUs";
import FAQ from "./pages/faqPage/FAQ";
import Login from "./pages/auth/loginPage/Login";
import Register from "./pages/auth/signUpPage/Register";
import Dashboard from "./pages/dashboard/Dashboard";

// Components
import Navbar from "./components/navbar/Navbar";
import MobileNavLinks from "./components/mobile-nav-links/MobileNavLinks";
import Cart from "./components/cart/Cart";
import Wrapper from "./components/wrapper/Wrapper";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

// Redux
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/actions/productsActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [cart, setCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [wrapper, setWrapper] = useState(false);

  const openCart = () => {
    setCart(!cart);
    setMobileMenu(false);

    if (cart === false) {
      setWrapper(true);
    } else {
      setWrapper(false);
    }
  };
  const openMenu = () => {
    setMobileMenu(!mobileMenu);
    setCart(false);

    if (mobileMenu === false) {
      setWrapper(true);
    } else {
      setWrapper(false);
    }
  };

  const handleCloseAll = () => {
    setMobileMenu(false);
    setCart(false);
    setWrapper(false);
  };

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar
          openCart={openCart}
          openMenu={openMenu}
          handleCloseAll={handleCloseAll}
        />
        <MobileNavLinks
          mobileMenu={mobileMenu}
          handleCloseAll={handleCloseAll}
        />
        <Cart cart={cart} />
        <Wrapper wrapper={wrapper} handleWrapperClose={handleCloseAll} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/collection/all" component={AllProducts} />
          <Route path="/collection/accessories" component={Accessories} />
          <Route path="/collection/earphones" component={Earphones} />
          <Route path="/collection/headphones" component={Headphones} />
          <Route path="/blog" component={Blog} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/faq" component={FAQ} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/collection/product/:id" component={ProductDetails} />
          <Route component={Home} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
