import React from 'react';
import { Link } from 'react-router-dom';
// import { destroyRecipe } from '../../../services/recipes';
import { Card } from 'react-bootstrap';

export default function ShowRecipes(props) {
  // const handleClick = async (id) => {
  //   await destroyRecipe(id);
  //   props.setRecipes(
  //     props.recipes.filter((recipe) => {
  //       return recipe.id !== id;
  //     })
  //   );
  // };

  return (
    <div>
      <h1>Recipes</h1>

      <div className='d-flex flex-row tile-rows'>
        <h3>Row 1</h3>

        <Link to='/recipes/:id'>
          <Card style={{ width: '18rem' }}>
            <Card.Title>you should see stuff here</Card.Title>
            {props.recipes.map((rec) => (
              <Card.Body>
                <p>nothing maps</p>
                <Card.Img
                  variant='top'
                  src={rec.uploadPhoto}
                  alt='recipe-photo'
                />
                {/* <img src={rec.uploadPhoto} alt='recipe-photo' className='' /> */}
                <Link to={`/recipes/:id`}>
                  <h3>{rec.recipeName}</h3>
                </Link>
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
                <div className='source'>
                  <h4>Source:</h4>
                  <a href={rec.source}>
                    <p>{rec.recipeName}</p>
                  </a>
                </div>
              </Card.Body>
            ))}
          </Card>
        </Link>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <div className='d-flex flex-row tile-rows'>
        <h3>Row 2</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <div className='d-flex flex-row tile-rows'>
        <h3>Row 3</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
