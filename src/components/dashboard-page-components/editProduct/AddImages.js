import React, { useState } from "react";

import { addProdactImages } from "../../../store/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";

const AddImages = () => {
  const id = useSelector((state) => state.products.productId);
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const handleAddImage = (e) => {
    e.preventDefault();
    dispatch(addProdactImages(image, id));
  };
  //   console.log(id);

  return (
    <div>
      <form onSubmit={handleAddImage}>
        <h3>Add Product Slider Images</h3>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
};

export default AddImages;
