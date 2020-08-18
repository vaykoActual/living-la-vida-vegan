import api from './api-helper';

export const readAllComments = async (recipeId) => {
  const response = await api.get(`/recipes/${recipeId}/comments`);
  return response.data;
};

// const deleteRecipe = async (id) => {
//   if (props.currentUser) {
//     await destroyRecipe(props.currentUser.id, id);
//     props.setRecipes(
//       props.recipes.filter((recipe) => {
//         return recipe.id !== id;
//       })
//     );
//   }
// };
