import * as defaultAxios from "axios";

const axios = defaultAxios.default;

export async function getProducts() {
  return await axios.get("/products");
}
