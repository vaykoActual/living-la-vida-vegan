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
                    border: '2px solid #285f72',
                    backgroundColor: 'rgba(40, 95, 114, 0.6)',
                    boxShadow: '5px 5px 6px 3px rgba(40, 95, 114, 0.6)',
                  }}
                  className="justify-content-center align-items-center recipe-card"
                >
                  <Card.Title className="recipe-title-home">
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
