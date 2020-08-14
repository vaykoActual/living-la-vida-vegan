import React, { useState } from 'react';
import './CreateRecipe.css';
import { postRecipe } from '../../../services/recipes';
import { Button, Col, Row, Form, ButtonToolbar } from 'react-bootstrap';

export default function CreateRecipe(props) {
  const [recipeInput, setRecipeInput] = useState({
    upload_photo: '',
    recipe_name: '',
    description: '',
    prep_time: '',
    cook_time: '',
    ingredients: '',
    instructions: '',
    source: '',
  });
  // const [addText, setText] = useState('');

  // const charReplace = (str) => {
  //   return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  //   setText(addText);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeInput({
      ...recipeInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = await postRecipe(props.currentUser.id, recipeInput);
    props.setRecipes([...props.recipes, newRecipe]);

    props.history.push(`/recipes/${newRecipe.id}`);
  };

  return (
    <>
      <div className='create-recipe-form'>
        <h2 className='form-title'>Add a Recipe</h2>
        create recipe inputs
        <form className='add-recipe' onSubmit={handleSubmit}>
          <h3>Add a Recipe</h3>
          <input
            type='text'
            name='upload_photo'
            value={recipeInput.upload_photo}
            onChange={handleChange}
            placeholder='Upload a Photo'
          />
          <input
            type='text'
            name='recipe_name'
            value={recipeInput.recipe_name}
            onChange={handleChange}
            placeholder='Recipe Name'
          />
          <input
            type='text'
            name='description'
            value={recipeInput.description}
            onChange={handleChange}
            placeholder='Description'
          />
          <input
            type='text'
            name='prep_time'
            value={recipeInput.prep_time}
            onChange={handleChange}
            placeholder='Prep Time'
          />
          <input
            type='text'
            name='cook_time'
            value={recipeInput.cook_time}
            onChange={handleChange}
            placeholder='Cook Time'
          />
          <input
            type='text'
            name='ingredients'
            value={recipeInput.ingredients}
            onChange={handleChange}
            placeholder='Ingredients'
          />
          <input
            type='text'
            name='instructions'
            value={recipeInput.instructions}
            onChange={handleChange}
            placeholder='Steps/Instructions'
          />
          <input
            type='text'
            name='source'
            value={recipeInput.source}
            onChange={handleChange}
            placeholder='Source'
          />
          <button>Save</button>
        </form>
      </div>
    </>
  );
}
