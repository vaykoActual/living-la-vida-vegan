import React from 'react';
import './ShowRecipes.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function ShowRecipes(props) {
  return (
    <>
      <div className="home-page">
        {props.recipes.map((rec) => (
          <Link to={`/recipes/${rec.id}`}>
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
                  style={{ fontSize: '30px' }}
                >
                  {rec.recipe_name}
                </Card.Title>
              </div>
              <Card.Body>
                <Card.Img
                  className="recipe-card-photo"
                  variant="top"
                  src={rec.upload_photo}
                  alt="recipe-photo"
                />
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
