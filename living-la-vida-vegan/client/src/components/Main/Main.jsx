import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { readAllRecipes } from '../../services/recipes';

import Login from '../Login/Login';
import Register from '../Register/Register';
import CreateRecipe from '../Recipes/CreateRecipe/CreateRecipe';
import ShowRecipes from '../Recipes/ShowRecipes/ShowRecipes';
import Recipe from '../Recipes/Recipe/Recipe';
import ShowUser from '../Users/ShowUser/ShowUser';

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
        path="/"
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
        path="/login"
        render={(props) => <Login {...props} setCurrentUser={setCurrentUser} />}
      />
      <Route
        path="/register"
        render={(props) => (
          <Register {...props} setCurrentUser={setCurrentUser} />
        )}
      />
      <Route
        path="/profile"
        render={(props) => (
          <ShowUser {...props} currentUser={currentUser} recipes={recipes} />
        )}
      />
      <Route
        path="/new/recipes"
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
        path="/recipes/:id"
        render={(props) => (
          <Recipe
            {...props}
            currentUser={currentUser}
            recipes={recipes}
            setRecipes={setRecipes}
          />
        )}
      />
    </main>
  );
}
