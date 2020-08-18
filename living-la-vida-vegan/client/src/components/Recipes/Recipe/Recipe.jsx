import React, { useState, useEffect } from 'react';
import { readOneRecipe, destroyRecipe } from '../../../services/recipes';
import { readAllComments } from '../../../services/comments';
import './Recipe.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import DeleteRecipe from '../DeleteRecipe/DeleteRecipe';
import UpdateRecipe from '../UpdateRecipe/UpdateRecipe';

export default function Recipe(props) {
  const [recipe, setRecipe] = useState('');
  const [comments, setComments] = useState([]);
  const [showDelete, setDelete] = useState(false);
  const [showEdit, setEdit] = useState(false);

  const getRecipe = async () => {
    if (props.currentUser) {
      const recipe = await readOneRecipe(
        props.currentUser.id,
        props.match.params.id
      );
      setRecipe(recipe);
    }
  };

  const getComments = async () => {
    const comments = await readAllComments(props.match.params.id);
    setComments(comments);
  };

  const deleteRecipe = async (id) => {
    if (props.currentUser) {
      await destroyRecipe(props.currentUser.id, id);
      props.setRecipes(
        props.recipes.filter((recipe) => {
          return recipe.id !== id;
        })
      );
    }
  };

  useEffect(() => {
    getRecipe();
    getComments();
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
          {props.recipes
            .filter((recipe) => {
              return recipe.id === parseInt(props.match.params.id);
            })
            .map((rec) => (
              <div className="recipe-page">
                <div className="recipe-details">
                  <img
                    src={rec.upload_photo}
                    alt="recipe"
                    className="recipe-photo"
                  />
                  <h1 className="recipe-title">{rec.recipe_name}</h1>
                  <p className="description">{rec.description}</p>
                  <div className="time-check">
                    <h5 className="prep-times">
                      <span className="time-title">Prep Time:</span>
                      {rec.prep_time}
                    </h5>

                    <h5 className="cook-times">
                      <span className="time-title">Cook Time:</span>{' '}
                      {rec.cook_time}
                    </h5>
                  </div>
                </div>
                <div className="ingredients-container">
                  <h4 className="ingredients">Ingredients</h4>
                  <p>{rec.ingredients}</p>
                </div>
                <div className="instructions-container">
                  <h4 className="instructions">Instructions</h4>
                  <p>{rec.instructions}</p>
                </div>
                <div>
                  <a href={rec.source}>
                    <h6 className="source">Recipe Source</h6>
                  </a>
                </div>

                {props.currentUser.id ? (
                  <ButtonToolbar className="justify-content-center align-items-center button-toolbar">
                    <UpdateRecipe
                      {...props}
                      show={showEdit}
                      onHide={handleCloseEdit}
                    />

                    <Button
                      variant="outline-info"
                      onClick={handleShowEdit}
                      className="mx-2"
                    >
                      Change
                    </Button>

                    <DeleteRecipe
                      {...props}
                      recipeDelete={props.recipes}
                      show={showDelete}
                      onHide={handleCloseDelete}
                      handleClick={deleteRecipe}
                      recipeId={rec.id}
                    />
                    <Button
                      variant="outline-danger"
                      onClick={handleShowDelete}
                      className="my-2"
                    >
                      Delete
                    </Button>
                  </ButtonToolbar>
                ) : (
                  ''
                )}
                <div className="comment-section">
                  <h4 className="comment-title">Comments</h4>
                  <div className="comment-line"></div>
                  {comments &&
                    comments.map((comment) => (
                      <>
                        <p className="comment-text">
                          <span className="username">
                            {comment.recipe.user.username}: &nbsp;
                          </span>
                          {comment.content}
                        </p>
                      </>
                    ))}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
