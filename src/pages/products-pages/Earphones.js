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
            BgClass={"earphones"}
            title={"earphones"}
            pTag={
              "Designed for decades of use. Master & Dynamic earphones use only the finest materials to ensure durability and rich audio quality. Earphones are precision-machined from palladium-coated solid brass and kitted with 8mm neodymium high-performance drivers that deliver a warm, detailed sound profile."
            }
          />

          {products
            ? products.map((product) =>
                product.category === "earphones" ? (
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
