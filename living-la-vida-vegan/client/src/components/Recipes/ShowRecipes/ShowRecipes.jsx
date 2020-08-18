import React from 'react';
import './ShowRecipes.css';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';

export default function ShowRecipes(props) {
  return (
    <>
      <div className="home-page">
        <div className="d-flex flex-row tile-rows">
          {props.recipes.map((rec) => (
            <Link to={`/recipes/${rec.id}`}>
              <CardDeck>
                <Card
                  style={{
                    margin: '25px',
                    width: '16rem',
                    padding: '15px',
                    backgroundColor: 'rgb(40, 95, 114)',
                  }}
                  className="recipe-card justify-content-center align-items-center "
                >
                  <Card.Title
                    className="recipe-title-home"
                    style={{ fontSize: '30px' }}
                  >
                    {rec.recipe_name}
                  </Card.Title>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={rec.upload_photo}
                      alt="recipe-photo"
                      rounded
                    />
                  </Card.Body>
                </Card>
              </CardDeck>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
