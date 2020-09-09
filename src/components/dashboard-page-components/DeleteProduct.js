import React, { useState } from "react";
import Product from "./Product";
import { useHistory } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import EditProduct from "./editProduct/EditProduct";

const DeleteProduct = () => {
  const products = useSelector((state) => state.products.products);

  const [isModalActive, setIsModalActive] = useState(false);
  const [activeTab, setActiveTab] = useState({
    productTab: true,
    commentTab: false,
    imagesTab: false,
  });

  const activeEditTab = () => {
    setActiveTab({
      ...activeTab,
      productTab: true,
      commentTab: false,
      imagesTab: false,
    });
  };
  const activeCommentTab = () => {
    setActiveTab({
      ...activeTab,
      productTab: false,
      commentTab: true,
      imagesTab: false,
    });
  };
  const activeImagesTab = () => {
    setActiveTab({
      ...activeTab,
      productTab: false,
      commentTab: false,
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
        {products !== undefined
          ? products.map((product) => (
              <div
                key={product._id}
                className="col-12 col-sm-6 col-md-3 col-lg-2"
              >
                <Product
                  product={product}
                  setIsModalActive={setIsModalActive}
                />
              </div>
            ))
          : null}
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
                <li onClick={activeCommentTab}>Edit/Delete Product Comments</li>
                <li onClick={activeImagesTab}>Edit/Delete Product Images</li>
              </ul>
            </div>

            <div className="edit-tabs">
              <div className={activeTab.productTab ? "tab active-tab" : "tab"}>
                <EditProduct setIsModalActive={setIsModalActive} />
              </div>
              <div className={activeTab.commentTab ? "tab active-tab" : "tab "}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <h3>Edit Comment</h3>
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <button>Edit Comment</button>
                </form>
              </div>

              <div className={activeTab.imagesTab ? "tab active-tab" : "tab"}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <h3>Add Product Image</h3>
                  <input type="file" />
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DeleteProduct;
