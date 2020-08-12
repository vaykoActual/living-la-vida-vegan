import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { readAllComments } from '../../services/comments';
import { readAllRecipes } from '../../services/recipes';

import Login from '../Login/Login';
import Register from '../Register/Register';
import ShowComments from '../Comments/ShowComments/ShowComments';
import CreateRecipe from '../Recipes/CreateRecipe/CreateRecipe';
import ShowRecipes from '../Recipes/ShowRecipes/ShowRecipes';
import Recipe from '../Recipes/Recipe/Recipe';
import UpdateRecipe from '../Recipes/UpdateRecipe/UpdateRecipe';
import Home from '../Home/Home';

export default function Main(props) {
  const { setCurrentUser } = props;

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const recipesList = await readAllRecipes();
    setRecipes(recipesList);
  };

  return (
    <main>
      <Route exact path='/' render={() => <Home />} />
      <Route
        path='/login'
        render={() => <Login {...props} setCurrentUser={setCurrentUser} />}
      />
      <Route
        path='/register'
        render={() => <Register {...props} setCurrentUser={setCurrentUser} />}
      />
      <Route path='/comments' render={() => <ShowComments />} />
      <Route exact path='/recipes' render={() => <ShowRecipes />} />
      <Route
        path='/recipes/new'
        render={() => (
          <CreateRecipe {...props} recipes={recipes} setRecipes={setRecipes} />
        )}
      />
      <Route exact path='/recipes/:id' render={() => <Recipe {...props} />} />
      <Route
        path='/recipes/:id/edit'
        render={() => (
          <UpdateRecipe {...props} recipes={recipes} setRecipes={setRecipes} />
        )}
      />
    </main>
  );
}
