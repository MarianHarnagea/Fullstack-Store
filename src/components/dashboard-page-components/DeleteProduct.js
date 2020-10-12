import React, { useState } from "react";
import Product from "./Product";
import { useHistory } from "react-router-dom";

import EditProduct from "./editProduct/EditProduct";
import AddImages from "./editProduct/AddImages";

// Redux
import { useSelector } from "react-redux";
import LoadingSpiner from "../spinner/LoadingSpiner";

const DeleteProduct = () => {
  const products = useSelector(({ products }) => products.products);
  const loadingProducts = useSelector(({ products }) => products.loading);

  const [isModalActive, setIsModalActive] = useState(false);
  const [activeTab, setActiveTab] = useState({
    productTab: true,
    imagesTab: false,
  });

  const activeEditTab = () => {
    setActiveTab({
      ...activeTab,
      productTab: true,
      imagesTab: false,
    });
  };

  const activeImagesTab = () => {
    setActiveTab({
      ...activeTab,
      productTab: false,
      imagesTab: true,
    });
  };

  const history = useHistory();
  const handleCloseModal = () => {
    setIsModalActive(false);
    history.push("/dashboard");
  };

  return (
    <div className="delete-product-tab">
      <div className="row py-5">
        {loadingProducts ? (
          <LoadingSpiner />
        ) : products !== undefined ? (
          products.map((product) => (
            <div key={product._id} className="col-6 col-sm-6 col-md-3 col-lg-2">
              <Product product={product} setIsModalActive={setIsModalActive} />
            </div>
          ))
        ) : null}
      </div>

      {isModalActive ? (
        <div className="product-edit-modal">
          <div className="inner-modal-container">
            <div className="modal-tab-btns">
              <div className="close-modal">
                <h2 onClick={handleCloseModal}>X</h2>
              </div>
              <ul>
                <li onClick={activeEditTab}>Edit Product Info</li>

                <li onClick={activeImagesTab}>
                  Add/Delete Product Slider Images
                </li>
              </ul>
            </div>

            <div className="edit-tabs">
              <div className={activeTab.productTab ? "tab active-tab" : "tab"}>
                <EditProduct setIsModalActive={setIsModalActive} />
              </div>

              <div className={activeTab.imagesTab ? "tab active-tab" : "tab"}>
                <AddImages />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DeleteProduct;
