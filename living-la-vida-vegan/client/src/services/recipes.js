import api from './api-helper';

export const readAllRecipes = async () => {
  const response = await api.get('/recipes');
  return response.data;
};

export const readOneRecipe = async (id) => {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
};

export const postRecipe = async (recipeData) => {
  const response = await api.post('/recipes', {
    recipe: recipeData,
  });
  return response.data;
};

export const putRecipe = async (id, recipeData) => {
  const response = await api.put(`/recipes/${id}`, { recipe: recipeData });
  return response.data;
};

export const destroyRecipe = async (id) => {
  const response = await api.delete(`/recipes/${id}`);
  return response;
};

export const addComment = async (commentId, recipeId) => {
  const response = await api.put(`/comments/${commentId}/recipes/${recipeId}`);
  return response.data;
};
