import React from "react";
import cartDeleteProduct from "../../assets/home-imgs/cart-x-icon.png";
import { Link } from "react-router-dom";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
// REDUX
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/actions/cartActions";

const CartProduct = ({ product, handleCloseAll }) => {
  const { _id, title, price, product_image } = product;

  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeProduct(product));
    toaster.notify("Product Removed", {
      duration: 2000,
      position: "bottom-left",
    });
  };

  return (
    <div className="cart-product">
      <div className="row">
        <div className="col-5 ">
          <Link
            className="d-flex justify-content-around align-items-center"
            to={`/collection/product/${_id}`}
            onClick={() => handleCloseAll()}
          >
            <div className="product-img">
              <img src={product_image} alt="product img" />
            </div>
            <div className="product-name">
              <h3>{title}</h3>
            </div>
          </Link>
        </div>

        <div className="col-6 d-flex justify-content-around">
          <div className="product-qty">
            <h4>{product.quantity}</h4>
          </div>
          <div className="product-price">
            <h3>$ {price.toFixed(2)}</h3>
          </div>
          <div className="product-delete">
            <img
              src={cartDeleteProduct}
              onClick={handleRemoveProduct}
              alt="cartDeleteProduct"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
