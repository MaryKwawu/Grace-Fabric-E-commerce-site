import * as defaultAxios from "axios";

const axios = defaultAxios.default;

export async function registerUser(payload) {
  return await axios.post("/auth/register", payload);
}

export async function loginUser(payload) {
  return await axios.post("/auth/login", payload);
}

export async function getSignedInUser(token) {
  return await axios.get("/user/signed-user", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
