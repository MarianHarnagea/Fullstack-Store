import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/actions/productsActions";

const CreateProduct = () => {
  const createdProduct = useSelector((state) => state.products.createdProduct);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "headphones",
  });

  const dispatch = useDispatch();

  const addProduct = (e) => {
    e.preventDefault();

    dispatch(createProduct(product));
  };

  return (
    <div className="create-product-tab">
      <form onSubmit={addProduct}>
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
        <input
          type="file"
          placeholder="Add An Image Product"
          onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
        />
        <button type="submit">Add Product</button>
      </form>

      {createdProduct !== undefined ? (
        <div className="created-product">
          <img src={createdProduct.product_image} alt="" />
          <h3 className="product-info">{createdProduct.title}</h3>
          <p className="product-info">{createdProduct.description}</p>
          <h4 className="product-info">$ {createdProduct.price}</h4>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateProduct;
