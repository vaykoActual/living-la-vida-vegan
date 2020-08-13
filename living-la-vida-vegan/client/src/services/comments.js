import api from './api-helper';

export const readAllComments = async (user_id, recipeId) => {
  const response = await api.get(
    `users/${user_id}/recipes/${recipeId}/comments`
  );
  return response.data;
};
