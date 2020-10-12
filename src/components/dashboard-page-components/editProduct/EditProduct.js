import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  editProductInfo,
  editProductImage,
} from "../../../store/actions/productsActions";

const EditProduct = ({ setIsModalActive }) => {
  const id = useSelector((state) => state.products.productId);
  const products = useSelector((state) => state.products.products);

  const initProductValues = products.filter((product) => product._id === id);

  const [product, setProduct] = useState({
    id: initProductValues[0]._id,
    title: initProductValues[0].title,
    description: initProductValues[0].description,
    price: initProductValues[0].price,
    image: initProductValues[0].product_image,
    gc_image_name: initProductValues[0].gc_image_name,
    category: initProductValues[0].category,
  });

  const dispatch = useDispatch();
  // const history = useHistory();

  const handleEditProductInfo = (e) => {
    e.preventDefault();
    dispatch(editProductInfo(product));
    // setIsModalActive(false);
    // history.push("/dashboard");
  };

  const handleEditProductImage = (e) => {
    e.preventDefault();
    dispatch(editProductImage(product));
    // setIsModalActive(false);
    // history.push("/dashboard");
  };
  return (
    <>
      <form onSubmit={handleEditProductInfo}>
        <h3>Edit Product Info</h3>
        <input
          type="text"
          placeholder="Title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />
        <select
          name="Category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        >
          <option value="headphones">Headphones</option>
          <option value="earphones">Earphones</option>
          <option value="accesories">Accesories</option>
        </select>

        <button type="submit">Change Product Info</button>
      </form>
      <form onSubmit={handleEditProductImage}>
        <h3>Edit Product Image</h3>
        <input
          required
          type="file"
          placeholder="Add An Image Product"
          onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
        />
        <button>Change Product Image</button>
      </form>
    </>
  );
};

export default EditProduct;
