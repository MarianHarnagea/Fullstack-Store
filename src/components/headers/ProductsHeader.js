import React from "react";

import "./headers.scss";

const ProductsHeader = ({ BgClass, title, pTag }) => {
  return (
    <div className="col-12 col-md-8 col-lg-9 col-xl-6 my-3 overflow-hidden">
      <div className={`product-header ${BgClass}`}>
        <div className="header-overlay">
          <h1>{title}</h1>
          <p>{pTag}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
