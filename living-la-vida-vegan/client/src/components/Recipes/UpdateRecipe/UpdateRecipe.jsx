import React, { useState, useEffect } from 'react';
import { putRecipe } from '../../../services/recipes';
import { Modal } from 'react-bootstrap';
import './UpdateRecipe.css';

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
    const { id } = props.match.params;
    const newRecipe = await putRecipe(props.currentUser.id, id, recipeUpdate);
    props.setRecipes(
      props.recipes.map((recipe) => {
        return recipe.id === parseInt(id) ? newRecipe : recipe;
      })
    );
    props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="form-title"
          >
            UPDATE RECIPE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="update-recipe-form">
          <form className="create-recipe" onSubmit={handleSubmit}>
            <label className="input-label">Recipe Name</label>
            <input
              className="update-form-input"
              type="text"
              name="recipe_name"
              required
              defaultValue={recipeUpdate.recipe_name}
              onChange={handleChange}
            />
            <label className="input-label">Image URL</label>
            <input
              className="update-form-input"
              type="text"
              name="upload_photo"
              required
              defaultValue={recipeUpdate.upload_photo}
              onChange={handleChange}
            />
            <label className="input-label">Description</label>
            <input
              className="update-form-input"
              type="text"
              name="description"
              required
              defaultValue={recipeUpdate.description}
              onChange={handleChange}
            />
            <label className="input-label">Prep Time</label>
            <input
              className="update-form-input"
              type="text"
              name="prep_time"
              required
              defaultValue={recipeUpdate.prep_time}
              onChange={handleChange}
            />
            <label className="input-label">Cook Time</label>
            <input
              className="update-form-input"
              type="text"
              name="cook_time"
              required
              defaultValue={recipeUpdate.cook_time}
              onChange={handleChange}
            />
            <label className="input-label">Ingredients</label>
            <input
              className="update-form-input"
              type="text"
              name="ingredients"
              required
              defaultValue={recipeUpdate.ingredients}
              onChange={handleChange}
            />
            <label className="input-label">Instructions</label>
            <input
              className="update-form-input"
              type="text"
              name="instructions"
              required
              defaultValue={recipeUpdate.instructions}
              onChange={handleChange}
            />
            <label className="input-label">Source</label>
            <input
              className="update-form-input"
              type="text"
              name="source"
              required
              defaultValue={recipeUpdate.source}
              onChange={handleChange}
            />

            <button className="save-button">Save Changes</button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
