import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, title, price, product_image } = product;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 product-container">
      <Link to={`/collection/product/${_id}`}>
        <div className="product">
          <img src={product_image} alt="MW65b" />
          <div className="product-text">
            <p>master & dynamix</p>
            <h3>{title}</h3>
            <h4>$ {price}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
