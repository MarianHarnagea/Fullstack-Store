import React from "react";
import "./collection.scss";
import Header from "../../components/headers/Header";
import Product from "../../components/products-page-components/Product";

import LoadingSpiner from "../../components/spinner/LoadingSpiner";

// redux
import { useSelector } from "react-redux";

const AllProducts = () => {
  const products = useSelector((state) => state.products.products);
  const productsLoading = useSelector(({ products }) => products.loading);

  return (
    <div className="collection">
      <Header title="Products" />

      <div className="products">
        <div className="row">
          {productsLoading ? (
            <LoadingSpiner />
          ) : products ? (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            "LOADING"
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
