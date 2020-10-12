import React from "react";
import XIcon from "../../assets/home-imgs/cart-x-icon.png";

import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../store/actions/cartActions";

const Product = ({ product }) => {
  const products = useSelector((state) => state.products.products);
  const { _id, title, price, product_image, quantity } = product;
  const initPrice = products.filter((product) => product._id === _id);

  const dispatch = useDispatch();

  return (
    <div className="checkout-product">
      <div className="row p-2 my-2">
        <div className="col-4 col-sm-4">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="checkout-img-product">
                <img src={product_image} alt="" />
              </div>
            </div>
            <div className="col-sm-6 mt-sm-2 mt-md-2 mt-lg-4 d-none d-sm-flex">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-8">
          <div className="row">
            <div className="col-12 d-sm-none ">
              <h3>{title}</h3>
            </div>
            <div className="d-none d-sm-flex col-sm-3 mt-sm-2 mt-md-2 mt-lg-4">
              <h4>$ {initPrice.length > 0 ? initPrice[0].price : ""}</h4>
            </div>
            <div className="col-12 d-sm-none">
              <h4>$ {price.toFixed(2)}</h4>
            </div>
            <div className="col-6 col-sm-3 mt-1 mt-sm-2 mt-md-2 mt-lg-4">
              <h4>{quantity}</h4>
            </div>
            <div className="col-sm-4 mt-sm-2 mt-md-2 mt-lg-4 d-none d-sm-flex">
              <h4>$ {price.toFixed(2)}</h4>
            </div>
            <div className="col-6 col-sm-2 mt-sm-2 mt-md-2 mt-lg-4">
              <img
                onClick={() => dispatch(removeProduct(product))}
                src={XIcon}
                style={{ width: "16px", height: "16px", cursor: "pointer" }}
                alt="Delete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
