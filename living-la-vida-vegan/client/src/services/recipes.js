import api from './api-helper';

export const readAllRecipes = async () => {
  const response = await api.get(`/recipes`);
  return response.data;
};

export const readUserRecipes = async (user_id) => {
  const response = await api.get(`/users/${user_id}/recipes`);
  return response.data;
};

export const readOneRecipe = async (user_id, id) => {
  const response = await api.get(`/users/${user_id}/recipes/${id}`);
  return response.data;
};

export const postRecipe = async (user_id, recipeData) => {
  // `/users/${userId}/recipes`
  const response = await api.post(`/users/${user_id}/recipes`, {
    recipe: recipeData,
  });
  return response.data;
};

export const putRecipe = async (user_id, id, recipeData) => {
  const response = await api.put(`/users/${user_id}/recipes/${id}`, {
    recipe: recipeData,
  });
  return response.data;
};

export const destroyRecipe = async (user_id, id) => {
  const response = await api.delete(`/users/${user_id}/recipes/${id}`);
  return response;
};

export const addComment = async (user_id, recipeId, commentId) => {
  const response = await api.put(
    `users/${user_id}/recipes/${recipeId}/comments/${commentId}/`
  );
  return response.data;
};
