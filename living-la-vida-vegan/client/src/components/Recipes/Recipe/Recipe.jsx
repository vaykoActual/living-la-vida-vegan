import React, { useState, useEffect } from 'react';
import {
  readOneRecipe,
  addComment,
  // readAllRecipes,
} from '../../../services/recipes';

export default function Recipe(props) {
  const [recipe, setRecipe] = useState('');
  const [commentId, setCommentId] = useState('');

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const recipe = await readOneRecipe(props.match.params.id);
    setRecipe(recipe);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCommentId(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = await addComment(commentId, recipe.id);
    setRecipe(recipe);
  };
  return (
    <div>
      {recipe && (
        <>
          {recipe.map((rec) => (
            <>
              <img src={rec.uploadPhoto} alt='recipe-photo' className='' />
              <h3>{rec.recipeName}</h3>
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

          <div className='comment-section'>
            <h2>Comments: </h2>
            {recipe.comments.map((comment) => (
              <p>{comment.content}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
