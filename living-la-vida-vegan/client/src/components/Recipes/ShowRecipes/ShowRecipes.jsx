import React from 'react';
import './ShowRecipes.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function ShowRecipes(props) {
  return (
    <>
      <div className='home-page'>
        <div className='d-flex flex-row tile-rows'>
          {props.recipes.map((rec) => (
            <Link to={`/recipes/${rec.id}`}>
              <Card
                style={{ width: '18rem', padding: '20px' }}
                className='justify-content-center align-items-center'
              >
                <Card.Title>{rec.recipe_name}</Card.Title>
                <Card.Body>
                  <Card.Img
                    variant='top'
                    src={rec.upload_photo}
                    alt='recipe-photo'
                  />
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
