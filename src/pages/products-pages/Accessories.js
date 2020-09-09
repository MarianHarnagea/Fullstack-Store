import React from "react";
import ProductsHeader from "../../components/headers/ProductsHeader";
import "./collection.scss";
import Product from "../../components/products-page-components/Product";

// redux
import { useSelector } from "react-redux";

const Accessories = () => {
  const products = useSelector((state) => state.products.products);

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

          {products
            ? products.map((product) =>
                product.category === "accesories" ? (
                  <Product key={product._id} product={product} />
                ) : null
              )
            : "LOADING"}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
