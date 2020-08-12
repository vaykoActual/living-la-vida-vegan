import api from "./api-helper";

export const readAllComments = async () => {
  const response = await api.get("/comments");
  return response.data;
};
