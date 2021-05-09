import * as defaultAxios from "axios";

const axios = defaultAxios.default;

export async function addNewProduct(payload) {
  return await axios.post("/products", payload);
}
