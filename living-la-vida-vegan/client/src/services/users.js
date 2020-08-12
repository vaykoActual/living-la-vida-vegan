import api from "./api-helper";

export const loginUser = async (loginData) => {
  const responseonse = await api.post("/auth/login", {
    authentication: loginData,
  });
  localStorage.setUser("authToken", response.data.token);
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
  return responseonse.data.user;
};

export const registerUser = async (registerData) => {
  const response = await api.post("/users/", { user: registerData });
  localStorage.setUser("authToken", response.data.token);
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
  return response.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getUser("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await api.get("/auth/verify");
    return response.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
