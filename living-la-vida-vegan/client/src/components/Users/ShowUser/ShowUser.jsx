import React from 'react';
import { Link } from 'react-router-dom';
// import Register from '../Register/Register';
// import Recipe from '../Recipes/Recipe/Recipe';

export default function ShowUser(props) {
  return (
    <>
      <div className='profile-info'>
        <img
          src={props.setCurrentUser.imgUrl}
          alt='profile-picture'
          className=''
        />
        <h2>{props.setCurrentUser.username}</h2>
        <h4>About Me</h4>
        <p>{props.setCurrentUser.aboutMe}</p>
        <h4>Likes/Interests</h4>
        <p>{props.setCurrentUser.likesInterests}</p>
      </div>

      <Link to='/recipes/:id'>
        {props.recipes &&
          props.recipes.map((recipe) => (
            <div className='profile-recipe-tiles'>
              <p>recipes should show here</p>
              <h5>{recipe.recipeName}</h5>
              <img
                src={recipe.uploadPhoto}
                alt='recipe-photo'
                className='recipe-photo-tile'
              />
            </div>
          ))}
      </Link>
    </>
  );
}
