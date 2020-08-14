import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowUser.css';
import Nav from '../../Nav/Nav';
import { readUserRecipes } from '../../../services/recipes';

export default function ShowUser(props) {
  const [userRecipe, setUserRecipe] = useState('');

  const getRecipes = async () => {
    console.log(props.currentUser.id);
    const recipe = await readUserRecipes(props.currentUser.id);
    setUserRecipe(userRecipe);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      {props.currentUser && (
        <>
          <div className='profile-info'>
            <img
              src={props.currentUser.img_url}
              alt='profile-picture'
              className='profile-picture'
            />
            <div className='profile-text'>
              <h2>{props.currentUser.username}</h2>
              <h4>About Me</h4>
              <p>{props.currentUser.aboutMe}</p>
              <h4>Likes/Interests</h4>
              <p>{props.currentUser.likesInterests}</p>
            </div>
          </div>

          {props.recipes &&
            props.recipes.map((recipe) => (
              <Link to={`/recipes/${recipe.id}`}>
                <div className='profile-recipe-tiles'>
                  <h5>{recipe.recipe_name}</h5>
                  <img
                    src={recipe.upload_photo}
                    alt='recipe-photo'
                    className='recipe-photo-tile'
                  />
                </div>
              </Link>
            ))}
        </>
      )}
    </>
  );
}
