import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowUser.css';
import { readUserRecipes } from '../../../services/recipes';
import { Image } from 'react-bootstrap';

export default function ShowUser(props) {
  const [userRecipe, setUserRecipe] = useState('');

  const getRecipes = async () => {
    const recipe = await readUserRecipes(props.currentUser.id);
    setUserRecipe(userRecipe);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      {props.currentUser && (
        <div className="user-profile">
          <div className="profile-info">
            <div>
              <img
                src={props.currentUser.img_url}
                alt="profile-picture"
                className="profile-picture"
              />
            </div>

            <div className="profile-text">
              <h4 className="profile-username">{props.currentUser.username}</h4>
              <h6 className="profile-title">You asked about me?</h6>
              <p>"{props.currentUser.about_me}"</p>
              <p>
                <span className="profile-title">I like </span>
                {props.currentUser.likes_interests}
              </p>
            </div>
          </div>

          {props.currentUser.recipes &&
            props.recipes.map((recipe) => (
              <Link to={`/recipes/${recipe.id}`}>
                <div className="profile-recipe-tiles">
                  <h4 className="recipe-title">{recipe.recipe_name}</h4>
                  <img
                    src={recipe.upload_photo}
                    alt="recipe-photo"
                    className="recipe-photo-tile"
                  />
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
}
