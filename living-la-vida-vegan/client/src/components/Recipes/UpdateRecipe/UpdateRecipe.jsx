import React, { useState } from 'react';
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

  // const [clicked, setClicked] = useState({
  //   clicked: false,
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeUpdate({
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipeData = await putRecipe(recipeUpdate);
    // props.setCurrentUser(userData);
    props.history.push('/');
  };

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  return (
    <div>
      <form className='add-recipe' onSubmit={handleSubmit}>
        <h3>Add a Recipe</h3>
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
        {/* <Link to={`/recipes/${id}`}> */}
        <button>Edit</button>
        <button>Save</button>
        <button>Delete</button>
        {/* </Link> */}
      </form>
    </div>
  );
}
