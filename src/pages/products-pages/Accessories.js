import React from "react";
import "./collection.scss";

import ProductsHeader from "../../components/headers/ProductsHeader";
import Product from "../../components/products-page-components/Product";

import LoadingSpiner from "../../components/spinner/LoadingSpiner";

// redux
import { useSelector } from "react-redux";

const Accessories = () => {
  const products = useSelector(({ products }) => products.products);
  const productsLoading = useSelector(({ products }) => products.loading);

  return (
    <div className="collection">
      <div className="products">
        <div className="row">
          <ProductsHeader
            BgClass={"accessories"}
            title={"Accessories"}
            pTag={
              "Discover a large range of accessories for your headphones  Designed for durability, you will enjoy their look and quality."
            }
          />
          {productsLoading ? (
            <LoadingSpiner />
          ) : products ? (
            products.map((product) =>
              product.category === "accesories" ? (
                <Product key={product._id} product={product} />
              ) : null
            )
          ) : (
            "LOADING"
          )}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
