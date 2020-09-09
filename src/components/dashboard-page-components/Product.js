import React from "react";
import { Link, useHistory } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getEditProductId,
} from "../../store/actions/productsActions";

const Product = ({ product, setIsModalActive }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product._id));
  };

  const history = useHistory();

  const getProductId = () => {
    setIsModalActive(true);
    dispatch(getEditProductId(product._id));
    history.push(`/dashboard/${product._id}`);
  };

  return (
    <div className="dashbord-product p-3">
      <Link to={`/collection/product/${product._id}`}>
        <img src={product.product_image} alt="" />
        <h3 className="product-info">{product.title}</h3>
        <h4 className="product-info">$ {product.price}</h4>
      </Link>

      <button onClick={handleDeleteProduct}>Delete Product</button>
      <button onClick={getProductId}>Edit Product</button>
    </div>
  );
};

export default Product;
