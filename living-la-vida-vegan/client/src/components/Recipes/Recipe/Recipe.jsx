import React, { useState, useEffect } from 'react';
import {
  readOneRecipe,
  addComment,
  destroyRecipe,
} from '../../../services/recipes';
import { readAllComments } from '../../../services/comments';
import { Link } from 'react-router-dom';
import './Recipe.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import DeleteRecipe from '../DeleteRecipe/DeleteRecipe';
import UpdateRecipe from '../UpdateRecipe/UpdateRecipe';

export default function Recipe(props) {
  const [recipe, setRecipe] = useState('');
  const [commentId, setCommentId] = useState('');
  const [showDelete, setDelete] = useState(false);
  const [showEdit, setEdit] = useState(false);
  // const [showSave, setSave] = useState(false)

  const getRecipe = async () => {
    if (props.currentUser) {
      const recipe = await readOneRecipe(
        props.currentUser.id,
        props.match.params.id
      );
      setRecipe(recipe);
    }
  };

  const deleteRecipe = async (id) => {
    if (props.currentUser) {
      await destroyRecipe(props.currentUser.id, props.match.params.id);
      props.setRecipes(
        props.recipes.filter((recipe) => {
          return recipe.id !== props.match.params.id;
        })
      );
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCommentId(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = await addComment(commentId, recipe.id);
    setRecipe(recipe);
    // props.history.push(`/recipes/${recipe.id}`);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const handleCloseDelete = () => {
    setDelete(false);
  };
  const handleCloseEdit = () => {
    setEdit(false);
  };

  const handleShowDelete = () => {
    setDelete(true);
  };

  const handleShowEdit = () => {
    setEdit(true);
  };

  return (
    <div>
      {props.recipes && (
        <>
          {props.recipes.map((rec) => (
            <div className='recipe-page'>
              <div className='recipe-details'>
                <img
                  src={rec.upload_photo}
                  alt='recipe-photo'
                  className='recipe-photo'
                />
                <h3>{rec.recipe_name}</h3>
                <p>{rec.description}</p>
                <div className='time-check'>
                  <div className='prep'>
                    <h5>Prep Time: </h5>
                    <h6 className='prep-times'>{rec.prep_time}</h6>
                  </div>
                  <div className='cook'>
                    <h5>Cook Time:</h5>
                    <h6 className='cook-times'>{rec.cook_time}</h6>
                  </div>
                </div>
              </div>

              <div className='ingredients'>
                <h4>Ingredients</h4>
                <p>{rec.ingredients}</p>
              </div>
              <div className='instructions'>
                <h4>Steps</h4>
                <p>{rec.instructions}</p>
              </div>
              <div>
                <a href={rec.source}>
                  <h6>view full recipe here</h6>
                </a>
              </div>
              {/* <div className='button-bar'> */}
              <ButtonToolbar className='justify-content-center align-items-center'>
                <UpdateRecipe
                  {...props}
                  recipeEdit={props.recipes}
                  show={showEdit}
                  onHide={handleCloseEdit}
                />
                <Button
                  variant='outline-info'
                  onClick={handleShowEdit}
                  className='mx-2'
                >
                  Change
                </Button>

                <DeleteRecipe
                  {...props}
                  recipeDelete={props.recipes}
                  show={showDelete}
                  onHide={handleCloseDelete}
                  handleClick={deleteRecipe}
                />
                <Button
                  variant='outline-danger'
                  onClick={handleShowDelete}
                  className='my-2'
                >
                  Delete
                </Button>
              </ButtonToolbar>
            </div>
          ))}

          <div className='comment-section'>
            <h3>Comments: </h3>
            {/* <p>{props.currentUser.username}: ohhh so yum</p> */}
            {/* <p>{comment.content}</p> */}
          </div>
        </>
      )}
    </div>
  );
}
