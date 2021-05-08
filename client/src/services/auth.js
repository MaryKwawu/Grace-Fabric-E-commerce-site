import * as defaultAxios from "axios";

const axios = defaultAxios.default;

export async function registerUser(payload) {
  return await axios.post("/auth/register", payload);
}
