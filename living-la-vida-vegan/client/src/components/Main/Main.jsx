import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { readAllRecipes } from '../../services/recipes';

import Login from '../Login/Login';
import Register from '../Register/Register';
import ShowComments from '../Comments/ShowComments/ShowComments';
import CreateRecipe from '../Recipes/CreateRecipe/CreateRecipe';
import ShowRecipes from '../Recipes/ShowRecipes/ShowRecipes';
import Recipe from '../Recipes/Recipe/Recipe';
import UpdateRecipe from '../Recipes/UpdateRecipe/UpdateRecipe';
import ShowUser from '../Users/ShowUser/ShowUser';
import DeleteRecipe from '../Recipes/DeleteRecipe/DeleteRecipe';

export default function Main(props) {
  const { currentUser, setCurrentUser } = props;

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const recipesList = await readAllRecipes();
    setRecipes(recipesList);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <main>
      <Route
        exact
        path='/'
        render={() => (
          <ShowRecipes
            {...props}
            setCurrentUser={setCurrentUser}
            recipes={recipes}
            setRecipes={setRecipes}
          />
        )}
      />
      <Route
        path='/login'
        render={(props) => <Login {...props} setCurrentUser={setCurrentUser} />}
      />
      <Route
        path='/register'
        render={(props) => (
          <Register {...props} setCurrentUser={setCurrentUser} />
        )}
      />
      <Route
        path='/profile'
        render={(props) => (
          <ShowUser {...props} currentUser={currentUser} recipes={recipes} />
        )}
      />
      <Route
        path='/recipes/new'
        render={(props) => (
          <CreateRecipe
            {...props}
            recipes={recipes}
            setRecipes={setRecipes}
            currentUser={currentUser}
          />
        )}
      />
      <Route
        exact
        path='/recipes/:id'
        render={(props) => (
          <Recipe
            {...props}
            currentUser={currentUser}
            recipes={recipes}
            setRecipes={setRecipes}
          />
        )}
      />
      <Route
        path='/recipes/:id/edit'
        render={(props) => (
          <UpdateRecipe
            {...props}
            recipes={recipes}
            setRecipes={setRecipes}
            currentUser={currentUser}
          />
        )}
      />

      <Route
        path='/delete'
        render={(props) => (
          <DeleteRecipe
            {...props}
            recipes={recipes}
            setRecipes={setRecipes}
            currentUser={currentUser}
          />
        )}
      />
      <Route
        path='/comments'
        render={() => <ShowComments {...props} currentUser={currentUser} />}
      />
    </main>
  );
}
