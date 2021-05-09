import * as defaultAxios from "axios";

const axios = defaultAxios.default;
export async function createCart(payload) {
  return await axios.post("/cart", payload);
}

export async function updateCart(userId, payload) {
  return await axios.patch(`/cart/${userId}`, payload);
}

export async function getCart(userId) {
  return await axios.get(`/cart/${userId}`);
}
