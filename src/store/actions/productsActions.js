import axios from "axios";

export const FETCHING_PRODUCTS = "FETCHING_PRODUCTS";
export const FETCHED_PRODUCTS = "FETCH_PRODUCTS";
export const ERROR_FETCH = "ERROR_FETCH";

export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

// FETCH PRODUCTS
export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCHING_PRODUCTS });
  axios
    .get("http://localhost:5000/products")
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

// CREATE NEW PRODUCT
export const createProduct = (product) => (dispatch, getState) => {
  const formData = new FormData();
  formData.append("title", product.title);
  formData.append("description", product.description);
  formData.append("price", product.price);
  formData.append("image", product.image);
  formData.append("category", product.category);

  const token = getState().auth.token;

  const config = { headers: { "Content-Type": "multipart/form-data" } };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  axios
    .post("http://localhost:5000/products", formData, config)
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

// DELETE PRODUCT
export const deleteProduct = (id) => (dispatch, getState) => {
  axios
    .delete(`http://localhost:5000/products/${id}`, tokenConfig(getState))
    .then((res) => dispatch(fetchProducts()))
    .catch((err) => console.log(err));
};

// GET PRODUCT ID
export const getEditProductId = (id) => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_ID,
    payload: id,
  });
};

// EDIT PRODUCT INFORMATIONS
export const editProductInfo = (product) => (dispatch, getState) => {
  axios
    .put(
      `http://localhost:5000/products/product/info/${product.id}`,
      product,
      tokenConfig(getState)
    )
    .then(() => {
      dispatch(fetchProducts());
    })
    .catch((err) => console.log(err));
};

// EDIT PRODUCT MAIN IMAGE
export const editProductImage = (product) => (dispatch, getState) => {
  const formData = new FormData();

  formData.append("image", product.image);
  formData.append("gc_image_name", product.gc_image_name);

  const token = getState().auth.token;

  const config = { headers: { "Content-Type": "multipart/form-data" } };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  axios
    .put(
      `http://localhost:5000/products/product/image/${product.id}`,
      formData,
      config
    )
    .then(() => {
      dispatch(fetchProducts());
    })
    .catch((err) => console.log(err));
};

// ADD PRODUCT CAROUSEL IMAGES
export const addProdactImages = (image, id) => (dispatch, getState) => {
  const formData = new FormData();
  formData.append("carousel_image", image);

  const token = getState().auth.token;

  const config = { headers: { "Content-Type": "multipart/form-data" } };
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  axios
    .put(`http://localhost:5000/products/${id}`, formData, config)
    .then(() => {
      dispatch(fetchProducts());
    })
    .catch((err) => console.log(err));
};

// ADD COMMENTS TO PRODUCT
export const addComment = (reviewFormVal, id) => (dispatch) => {
  axios
    .put(`http://localhost:5000/products/comment/${id}`, reviewFormVal)
    .then((result) => {
      dispatch(fetchProducts());
    })
    .catch((err) => console.log(err));
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
