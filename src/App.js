import React, { useState, useEffect, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { NonPrivateRoute, PrivateRoute } from "./router/Routes";

// Redux
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/actions/productsActions";
import { fetchUser } from "./store/actions/authActions";
import { loadCart } from "./store/actions/cartActions";
import { loadCheckoutProducts } from "./store/actions/checkoutActions";
import { loadOrders } from "./store/actions/ordersActions";

// Components
import Navbar from "./components/navbar/Navbar";
import MobileNavLinks from "./components/mobile-nav-links/MobileNavLinks";
import Cart from "./components/cart/Cart";
import Wrapper from "./components/wrapper/Wrapper";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./router/ScrollToTop";
import LoadingSpiner from "./components/spinner/LoadingSpiner";

// Pages
import Home from "./pages/homepage/Home";
const AllProducts = lazy(() => import("./pages/products-pages/AllProducts"));
const Accessories = lazy(() => import("./pages/products-pages/Accessories"));
const Earphones = lazy(() => import("./pages/products-pages/Earphones"));
const Headphones = lazy(() => import("./pages/products-pages/Headphones"));
const ProductDetails = lazy(() =>
  import("./pages/products-pages/ProductDetails")
);
const Blog = lazy(() => import("./pages/blogPage/Blog"));
const ContactUs = lazy(() => import("./pages/contactUsPage/ContactUs"));
const FAQ = lazy(() => import("./pages/faqPage/FAQ"));
const Login = lazy(() => import("./pages/auth/loginPage/Login"));
const Register = lazy(() => import("./pages/auth/signUpPage/Register"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUser());
    dispatch(loadCart());
    dispatch(loadCheckoutProducts());
    dispatch(loadOrders());
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

  const AdminAccount = () => {
    return (
      <div className="admin-account">
        <ul>
          <li>Log in as admin to view dashboard!</li>
          <li>Email: admin@yahoo.com</li>
          <li>Password: admin</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="App">
      <ScrollToTop />

      <Navbar
        openCart={openCart}
        openMenu={openMenu}
        handleCloseAll={handleCloseAll}
      />
      <AdminAccount />
      <MobileNavLinks mobileMenu={mobileMenu} handleCloseAll={handleCloseAll} />
      <Cart cart={cart} handleCloseAll={handleCloseAll} />
      <Wrapper wrapper={wrapper} handleWrapperClose={handleCloseAll} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Suspense fallback={<LoadingSpiner />}>
          <NonPrivateRoute path="/login">
            <Login />
          </NonPrivateRoute>
          <NonPrivateRoute path="/register">
            <Register />
          </NonPrivateRoute>

          <Route path="/collection/all" component={AllProducts} />
          <Route path="/collection/accessories" component={Accessories} />
          <Route path="/collection/earphones" component={Earphones} />
          <Route path="/collection/headphones" component={Headphones} />
          <Route path="/blog" component={Blog} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/faq" component={FAQ} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/collection/product/:id" component={ProductDetails} />

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Suspense>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
