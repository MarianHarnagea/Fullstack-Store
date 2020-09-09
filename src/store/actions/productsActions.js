import axios from "axios";

export const FETCHING_PRODUCTS = "FETCHING_PRODUCTS";
export const FETCHED_PRODUCTS = "FETCH_PRODUCTS";
export const ERROR_FETCH = "ERROR_FETCH";

export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCHING_PRODUCTS });
  axios
    .get("https://exp-store-api.herokuapp.com/products")
    .then((products) => {
      dispatch({
        type: FETCHED_PRODUCTS,
        payload: products.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_FETCH,
        payload: err,
      });
    });
};
export const createProduct = (product) => (dispatch) => {
  const formData = new FormData();
  formData.append("title", product.title);
  formData.append("description", product.description);
  formData.append("price", product.price);
  formData.append("image", product.image);
  formData.append("category", product.category);

  const config = { headers: { "Content-Type": "multipart/form-data" } };
  axios
    .post("https://exp-store-api.herokuapp.com/products", formData, config)
    .then((result) => {
      dispatch(fetchProducts());
      dispatch({
        type: CREATE_PRODUCT,
        payload: result.data,
      });
      // console.log(result.data);
    })
    .catch((err) => console.log(err));
};
export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`https://exp-store-api.herokuapp.com/products/${id}`)
    .then((res) => dispatch(fetchProducts()))
    .catch((err) => console.log(err));
};
export const getEditProductId = (id) => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_ID,
    payload: id,
  });
};
export const editProduct = (product) => (dispatch) => {
  const formData = new FormData();
  formData.append("id", product.id);
  formData.append("title", product.title);
  formData.append("description", product.description);
  formData.append("price", product.price);
  formData.append("image", product.image);
  formData.append("category", product.category);
  formData.append("gc_image_name", product.gc_image_name);

  const config = { headers: { "Content-Type": "multipart/form-data" } };

  axios
    .put(
      `https://exp-store-api.herokuapp.com/products/product/${product.id}`,
      formData,
      config
    )
    .then(() => {
      dispatch(fetchProducts());
    })
    .catch((err) => console.log(err));
};
