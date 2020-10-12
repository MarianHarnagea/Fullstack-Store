import React from "react";
import ProductsHeader from "../../components/headers/ProductsHeader";
import "./collection.scss";
import Product from "../../components/products-page-components/Product";

import LoadingSpiner from "../../components/spinner/LoadingSpiner";

// redux
import { useSelector } from "react-redux";

const Accessories = () => {
  const products = useSelector((state) => state.products.products);
  const productsLoading = useSelector(({ products }) => products.loading);

  return (
    <div className="collection">
      <div className="products">
        <div className="row">
          <ProductsHeader
            BgClass={"headphones"}
            title={"headphones"}
            pTag={
              "Master & Dynamic headphones are not only beautiful : they use a noise-reducing technology that allow you to achieve ultimate focus. Comfortable and durable, they will become your everyday's partner."
            }
          />

          {productsLoading ? (
            <LoadingSpiner />
          ) : products ? (
            products.map((product) =>
              product.category === "headphones" ? (
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
