import React from 'react';
import { Link } from 'react-router-dom';
import { destroyRecipe } from '../../../services/recipes';

export default function ShowRecipes(props) {
  const handleClick = async (id) => {
    await destroyRecipe(id);
    props.setRecipes(
      props.recipes.filter((recipe) => {
        return recipe.id !== id;
      })
    );
  };

  return (
    <div>
      <h1>Recipes</h1>
      {props.recipes.map((rec) => (
        <>
          <img src={rec.uploadPhoto} alt='recipe-photo' className='' />
          {/* <Link to={`/recipes/${recipe.id}`}> */}
          <h3>{rec.recipeName}</h3>
          {/* </Link> */}
          <div className='time-check'>
            <h4>Prep Time:</h4>
            <p>{rec.prepTime}</p>
            <h4>Cook Time:</h4>
            <p>{rec.cookTime}</p>
          </div>
          <div className='ingredients'>
            <h4>Ingredients</h4>
            <p>{rec.ingredients}</p>
          </div>
          <div className='instructions'>
            <h4>Steps</h4>
            <p>{rec.stepsInstructions}</p>
          </div>
          <div>
            <h4>Source:</h4>
            <a href={rec.source}>
              <p>{rec.recipeName}</p>
            </a>
          </div>
        </>
      ))}
    </div>
  );
}
