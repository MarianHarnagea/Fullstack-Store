import React from "react";
import cartDeleteProduct from "../../assets/home-imgs/cart-x-icon.png";

const CartProduct = () => {
  return (
    <div className="cart-product">
      <div className="row">
        <div className="col-6 d-flex justify-content-around">
          <div className="product-img">
            <img src="" alt="product img" />
          </div>
          <div className="product-name">
            <h3>title</h3>
          </div>
        </div>

        <div className="col-6 d-flex justify-content-around">
          <div className="product-qty">
            <h4>quantity</h4>
          </div>
          <div className="product-price">
            <h3>$ 999</h3>
          </div>
          <div className="product-delete">
            <img src={cartDeleteProduct} alt="cartDeleteProduct" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
