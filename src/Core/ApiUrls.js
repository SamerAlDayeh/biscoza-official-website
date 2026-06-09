
const BASE_URL = "http://127.0.0.1:8000/api";

const endpoints = {
  productDetails: (productId) => `${BASE_URL}/ProductDetails/${productId}`,
  home: () => `${BASE_URL}/Home`,
  allProducts: () => `${BASE_URL}/AllProducts`,
};

export { BASE_URL, endpoints };