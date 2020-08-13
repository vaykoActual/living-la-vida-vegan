import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { putRecipe } from '../../../services/recipes';

export default function UpdateRecipe(props) {
  const [recipeUpdate, setRecipeUpdate] = useState({
    uploadPhoto: '',
    recipeName: '',
    description: '',
    prepTime: '',
    cookTime: '',
    ingredients: '',
    stepsInstructions: '',
    source: '',
  });

  useEffect(() => {
    defaultRecipeData();
  }, [props.recipes]);

  // const [clicked, setClicked] = useState({
  //   clicked: false,
  // });

  const defaultRecipeData = (e) => {
    const recipe = props.recipes.find((recipe) => {
      return recipe.id === props.match.params.id;
    });
    if (recipe) {
      const { name, value } = e.target;
      setRecipeUpdate({
        ...recipeUpdate,
        [name]: value,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeUpdate({
      ...recipeUpdate,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = props.match.params;
    const newRecipe = await putRecipe(id, recipeUpdate);
    props.setRecipes(
      props.recipes.map((recipe) => {
        return recipe.id === parseInt(id) ? newRecipe : recipe;
      })
    );
    props.history.push('/recipes');
  };

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  return (
    <div>
      <form className='add-recipe' onSubmit={handleSubmit}>
        <h3>Update Recipe</h3>
        <input
          type='text'
          name='upload-photo'
          value={recipeUpdate.uploadPhoto}
          onChange={handleChange}
          placeholder='Upload a Photo'
        />
        <input
          type='text'
          name='recipe-name'
          value={recipeUpdate.recipeName}
          onChange={handleChange}
          placeholder='Recipe Name'
        />
        <input
          type='text'
          name='description'
          value={recipeUpdate.description}
          onChange={handleChange}
          placeholder='Description'
        />
        <input
          type='text'
          name='prep-time'
          value={recipeUpdate.prepTime}
          onChange={handleChange}
          placeholder='Prep Time'
        />
        <input
          type='text'
          name='cook-time'
          value={recipeUpdate.cookTime}
          onChange={handleChange}
          placeholder='Cook Time'
        />
        <input
          type='text'
          name='ingredients'
          value={recipeUpdate.ingredients}
          onChange={handleChange}
          placeholder='Ingredients'
        />
        <input
          type='text'
          name='steps-instructions'
          value={recipeUpdate.stepsInstructions}
          onChange={handleChange}
          placeholder='Steps/Instructions'
        />
        <input
          type='text'
          name='source'
          value={recipeUpdate.source}
          onChange={handleChange}
          placeholder='Source'
        />
        {/* <Link to={`/recipes/${id}`}> */} <button>Edit</button>{' '}
        {/* </Link> */}
        <Link>
          <button>Save</button>
        </Link>
        {/* <Link to='/delete-recipe'><button>Delete</button></Link> */}
      </form>
    </div>
  );
}
