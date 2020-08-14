import React, { useState, useEffect } from 'react';
import { putRecipe } from '../../../services/recipes';
import { Modal, Button, ButtonToolbar, Col, Row, Form } from 'react-bootstrap';

export default function UpdateRecipe(props) {
  const [recipeUpdate, setRecipeUpdate] = useState({
    upload_photo: '',
    recipe_name: '',
    description: '',
    prep_time: '',
    cook_time: '',
    ingredients: '',
    instructions: '',
    source: '',
  });

  useEffect(() => {
    defaultRecipeData();
  }, [props.recipeEdit]);

  const defaultRecipeData = (e) => {
    const recipe = props.recipeEdit.find((recipe) => {
      return recipe.id === props.match.params.id;
    });
    if (recipe) {
      const { name, value } = e.target;
      setRecipeUpdate({
        ...recipeUpdate,
        [name]: value,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeUpdate({
      ...recipeUpdate,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = props.match.params;
    const newRecipe = await putRecipe(id, recipeUpdate);
    props.setRecipes(
      props.recipeEdit.map((recipe) => {
        return recipe.id === parseInt(id) ? newRecipe : recipe;
      })
    );
    alert("You've updated the recipe!");
    // props.history.push(`/recipes/${newRecipe.id}`);
  };

  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Update Recipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='update-recipe-form mx-1'>
          <Row className='row h-100 justify-content-center align-items-center '>
            <Col sm={6}>
              <Form>
                <Form.Group controlId='RecipeId' className='create-input'>
                  <Form.Control
                    type='text'
                    name='recipe_name'
                    required
                    disabled
                    defaultValue={recipeUpdate.recipe_name}
                    placeholder='should show existing Recipe Name'
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='row h-100 justify-content-center align-items-center '>
            <Col sm={6}>
              <Form>
                <Form.Group controlId='RecipeId' className='create-input'>
                  <Form.Control
                    onChange={handleChange}
                    type='text'
                    name='upload_photo'
                    required
                    defaultValue={recipeUpdate.upload_photo}
                    placeholder='Upload a Photo'
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='row h-100 justify-content-center align-items-center '>
            <Col sm={6}>
              <Form>
                <Form.Group controlId='RecipeId' className='create-input'>
                  <Form.Control
                    type='text'
                    name='description'
                    required
                    defaultValue={recipeUpdate.description}
                    placeholder='Description'
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='row h-100 justify-content-center align-items-center '>
            <Col sm={6}>
              <Form>
                <Form.Group controlId='RecipeId' className='create-input'>
                  <Form.Control
                    type='text'
                    name='prep_time'
                    required
                    defaultValue={recipeUpdate.prep_time}
                    placeholder='Prep Time'
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='row h-100 justify-content-center align-items-center '>
            <Col sm={6}>
              <Form>
                <Form.Group controlId='RecipeId' className='create-input'>
                  <Form.Control
                    type='text'
                    name='cook_time'
                    required
                    defaultValue={recipeUpdate.cook_time}
                    placeholder='Cook Time'
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='row h-100 justify-content-center align-items-center '>
            <Col sm={6}>
              <Form>
                <Form.Group controlId='RecipeId' className='create-input'>
                  <Form.Control
                    type='text'
                    name='ingredients'
                    required
                    defaultValue={recipeUpdate.ingredients}
                    placeholder='Ingredients'
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='row h-100 justify-content-center align-items-center '>
            <Col sm={6}>
              <Form>
                <Form.Group controlId='RecipeId' className='create-input'>
                  <Form.Control
                    type='text'
                    name='instructions'
                    required
                    defaultValue={recipeUpdate.instructions}
                    placeholder='Instructions'
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='row h-100 justify-content-center align-items-center '>
            <Col sm={6}>
              <Form>
                <Form.Group controlId='RecipeId' className='create-input'>
                  <Form.Control
                    type='text'
                    name='source'
                    required
                    defaultValue={recipeUpdate.source}
                    placeholder='Source'
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>
            Cancel
          </Button>
          <Button
            variant='secondary'
            onClick={props.onHide}
            onSubmit={handleSubmit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
