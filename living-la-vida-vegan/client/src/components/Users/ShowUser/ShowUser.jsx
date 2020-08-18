import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowUser.css';
import { readUserRecipes } from '../../../services/recipes';
import { Card } from 'react-bootstrap';

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
                alt="profile"
                className="profile-picture"
              />
            </div>

            <div className="profile-text">
              <h1 className="profile-username">{props.currentUser.username}</h1>
              <h4 className="profile-title">about me</h4>
              <p className="prof-description">"{props.currentUser.about_me}"</p>
              <h4 className="profile-title">likes & interests</h4>
              <p className="prof-description">
                {props.currentUser.likes_interests}
              </p>
            </div>
          </div>

          <div className="recipe-card-page">
            {props.currentUser.id &&
              props.recipes &&
              props.recipes.map((recipe) => (
                <Link to={`/recipes/${recipe.id}`}>
                  <Card
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid rgb(40, 95, 114)',
                    }}
                    className="recipe-card justify-content-center align-items-center mx-4"
                  >
                    <div className="mx-5">
                      <Card.Title
                        className="recipe-title-home"
                        style={{ fontSize: '35px' }}
                      >
                        {recipe.recipe_name}
                      </Card.Title>
                    </div>
                    <Card.Body>
                      <Card.Img
                        className="recipe-card-photo"
                        variant="top"
                        src={recipe.upload_photo}
                        alt="recipe"
                      />
                    </Card.Body>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
