import React, { useState } from 'react';
import './CreateRecipe.css';
import { Link } from 'react-router-dom';
import { postRecipe } from '../../../services/recipes';
import { Button, Col, Row, Form, ButtonToolbar } from 'react-bootstrap';

export default function CreateRecipe(props) {
  const [recipeInput, setRecipeInput] = useState({
    uploadPhoto: '',
    recipeName: '',
    description: '',
    prepTime: '',
    cookTime: '',
    ingredients: '',
    stepsInstructions: '',
    source: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeInput({
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = await postRecipe(recipeInput);
    props.setRecipes([...props.recipes, newRecipe]);
    alert("You've added a new recipe!");
    props.history.push('/recipes/:id');
  };

  return (
    <>
      <div className='create-recipe-form'>
        <h2 className='form-title'>Add a Recipe</h2>
        <Row className='row h-100 justify-content-center align-items-center my-2'>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='RecipeId' className='create-input'>
                <Form.Control
                  onChange={handleChange}
                  type='text'
                  name='upload_photo'
                  required
                  defaultValue={recipeInput.upload_photo}
                  placeholder='Upload a Photo'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='row h-100 justify-content-center align-items-center my-2'>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='RecipeId' className='create-input'>
                <Form.Control
                  type='text'
                  name='recipe_name'
                  required
                  defaultValue={recipeInput.recipe_name}
                  placeholder='Recipe Name'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='row h-100 justify-content-center align-items-center my-2'>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='RecipeId' className='create-input'>
                <Form.Control
                  type='text'
                  name='description'
                  required
                  defaultValue={recipeInput.description}
                  placeholder='Description'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='row h-100 justify-content-center align-items-center my-2'>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='RecipeId' className='create-input'>
                <Form.Control
                  type='text'
                  name='prep_time'
                  required
                  defaultValue={recipeInput.prep_time}
                  placeholder='Prep Time'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='row h-100 justify-content-center align-items-center my-2'>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='RecipeId' className='create-input'>
                <Form.Control
                  type='text'
                  name='cook_time'
                  required
                  defaultValue={recipeInput.cook_time}
                  placeholder='Cook Time'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='row h-100 justify-content-center align-items-center my-2'>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='RecipeId' className='create-input'>
                <Form.Control
                  type='text'
                  name='ingredients'
                  required
                  defaultValue={recipeInput.ingredients}
                  placeholder='Ingredients'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='row h-100 justify-content-center align-items-center my-2'>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='RecipeId' className='create-input'>
                <Form.Control
                  type='text'
                  name='instructions'
                  required
                  defaultValue={recipeInput.instructions}
                  placeholder='Instructions'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='row h-100 justify-content-center align-items-center my-2'>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='RecipeId' className='create-input'>
                <Form.Control
                  type='text'
                  name='source'
                  required
                  defaultValue={recipeInput.source}
                  placeholder='Source'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <ButtonToolbar className='justify-content-center align-items-center'>
          <Button variant='secondary'>Save</Button>
        </ButtonToolbar>
      </div>
    </>
  );
}
