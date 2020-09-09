import React from "react";
import "./collection.scss";
import Header from "../../components/headers/Header";
import Product from "../../components/products-page-components/Product";

// redux
import { useSelector } from "react-redux";

const AllProducts = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="collection">
      <Header title="Products" />

      <div className="products">
        <div className="row">
          {products
            ? products.map((product) => (
                <Product key={product._id} product={product} />
              ))
            : "LOADING"}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
