import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function ShowRecipes(props) {
  return (
    <>
      <h1>Recipes</h1>

      <div className='d-flex flex-row tile-rows'>
        {props.recipes.map((rec) => (
          <Card style={{ width: '18rem' }}>
            <Card.Title>you should see stuff here</Card.Title>
            <Card.Body>
              <p>nothing maps</p>
              <Card.Img
                variant='top'
                src={rec.upload_photo}
                alt='recipe-photo'
              />
              <Link to={`/recipes/${rec.id}`}>
                <h3>{rec.recipe_name}</h3>
              </Link>
              <div className='time-check'>
                <h4>Prep Time:</h4>
                <p>{rec.prep_time}</p>
                <h4>Cook Time:</h4>
                <p>{rec.cook_time}</p>
              </div>
              <div className='ingredients'>
                <h4>Ingredients</h4>
                <p>{rec.ingredients}</p>
              </div>
              <div className='instructions'>
                <h4>Instructions</h4>
                <p>{rec.instructions}</p>
              </div>
              <div className='source'>
                <h4>Source:</h4>
                <a href={rec.source}>
                  <p>{rec.recipe_name}</p>
                </a>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
