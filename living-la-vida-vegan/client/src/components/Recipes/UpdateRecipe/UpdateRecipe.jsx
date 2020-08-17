import React, { useState, useEffect } from 'react';
import { readOneRecipe, putRecipe } from '../../../services/recipes';
import { Modal, Button, ButtonToolbar, Col, Row, Form } from 'react-bootstrap';

export default function UpdateRecipe(props) {
  const [recipeUpdate, setRecipeUpdate] = useState({
    upload_photo: '',
    recipe_name: '',
    description: '',
    prep_time: '',
    cook_time: '',
    ingredients: '',
    instructions: '',
    source: '',
  });

  useEffect(() => {
    defaultRecipeData();
  }, [props.recipes]);

  const defaultRecipeData = (e) => {
    const recipe = props.recipes.find((recipe) => {
      return recipe.id === parseInt(props.match.params.id);
    });
    if (recipe) {
      setRecipeUpdate({
        upload_photo: recipe.upload_photo,
        recipe_name: recipe.recipe_name,
        description: recipe.description,
        prep_time: recipe.prep_time,
        cook_time: recipe.cook_time,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        source: recipe.source,
      });
    }
  };

  const handleChange = (e) => {
    if (props.currentUser.id) {
      const { name, value } = e.target;
      setRecipeUpdate({
        ...recipeUpdate,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('it worked.');
    const { id } = props.match.params;
    const newRecipe = await putRecipe(props.currentUser.id, id, recipeUpdate);
    props.setRecipes(
      props.recipes.map((recipe) => {
        return recipe.id === parseInt(id) ? newRecipe : recipe;
      })
    );
    props.onHide();
  };

  // // const [addText, setText] = useState('');

  // // const charReplace = (str) => {
  // //   return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // //   setText(addText);
  // // };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Recipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="update-recipe-form mx-1">
          <form className="add-recipe" onSubmit={handleSubmit}>
            <input
              type="text"
              name="recipe_name"
              required
              // disabled
              defaultValue={recipeUpdate.recipe_name}
              onChange={handleChange}
              placeholder="should show existing Recipe Name"
            />
            <input
              type="text"
              name="upload_photo"
              required
              defaultValue={recipeUpdate.upload_photo}
              onChange={handleChange}
              placeholder="Upload a Photo"
            />
            <input
              type="text"
              name="description"
              required
              defaultValue={recipeUpdate.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <input
              type="text"
              name="prep_time"
              required
              defaultValue={recipeUpdate.prep_time}
              onChange={handleChange}
              placeholder="Prep Time"
            />
            <input
              type="text"
              name="cook_time"
              required
              defaultValue={recipeUpdate.cook_time}
              onChange={handleChange}
              placeholder="Cook Time"
            />
            <input
              type="text"
              name="ingredients"
              required
              defaultValue={recipeUpdate.ingredients}
              onChange={handleChange}
              placeholder="Ingredients"
            />
            <input
              type="text"
              name="instructions"
              required
              defaultValue={recipeUpdate.instructions}
              onChange={handleChange}
              placeholder="Instructions"
            />
            <input
              type="text"
              name="source"
              required
              defaultValue={recipeUpdate.source}
              onChange={handleChange}
              placeholder="Source"
            />
            {/* <Button variant="danger" onClick={props.onHide}>
              Cancel
            </Button> */}
            <button
            // variant="secondary"
            // onClick={handleSubmit}
            // onClick={props.onHide}
            >
              Save Changes
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
