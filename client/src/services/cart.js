import * as defaultAxios from 'axios'

const axios = defaultAxios.default
export async function createCart(payload) {
  return await axios.post('/cart', payload)
}

export async function updateCart(cartId, payload) {
  return await axios.patch(`/cart/${cartId}`, payload)
}

export async function getCart(userId) {
  return await axios.get(`/cart/${userId}`)
}
