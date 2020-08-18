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
  const [comments, setComments] = useState([]);
  // const [commentId, setCommentId] = useState('');
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

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setCommentId(value);
  // };

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
                    alt="recipe-photo"
                    className="recipe-photo"
                  />
                  <h3 className="recipe-title">{rec.recipe_name}</h3>
                  <p className="description">{rec.description}</p>
                  <div className="time-check">
                    <div className="prep">
                      <h5 className="prep-times">
                        {' '}
                        Prep Time: {rec.prep_time}
                      </h5>
                    </div>
                    <div className="cook">
                      <h5 className="cook-times">Cook Time: {rec.cook_time}</h5>
                    </div>
                  </div>
                </div>
                <div className="ingredients">
                  <h4>Ingredients</h4>
                  <p>{rec.ingredients}</p>
                </div>
                <div className="instructions">
                  <h4>Steps</h4>
                  <p>{rec.instructions}</p>
                </div>
                <div>
                  <a href={rec.source}>
                    <h6 className="source">Recipe Source</h6>
                  </a>
                </div>
                // add ternary to check if userexists
                <ButtonToolbar className="justify-content-center align-items-center">
                  <UpdateRecipe
                    {...props}
                    // recipeEdit={props.recipes}
                    show={showEdit}
                    onHide={handleCloseEdit}
                  />

                  <Button
                    variant="outline-primary"
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
                <div className="comment-section">
                  <h3>Comments:</h3>

                  {
                    // props.currentUser &&
                    comments &&
                      comments.map((comment) => (
                        <>
                          <h4>{comment.recipe.user.username}: </h4>
                          <p>{comment.content}</p>
                        </>
                      ))
                  }
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
