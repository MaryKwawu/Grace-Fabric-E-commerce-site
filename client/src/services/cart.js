import * as defaultAxios from "axios";

const axios = defaultAxios.default;
export async function createCart(payload) {
  return await axios.post("/cart", payload);
}
