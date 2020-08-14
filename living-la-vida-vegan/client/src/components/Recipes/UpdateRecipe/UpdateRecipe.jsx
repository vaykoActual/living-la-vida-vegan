import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { putRecipe } from '../../../services/recipes';
import { Modal, Button, Col, Row, Form } from 'react-bootstrap';

export default function UpdateRecipe(props) {
  const [recipeUpdate, setRecipeUpdate] = useState({
    uploadPhoto: '',
    recipeName: '',
    description: '',
    prepTime: '',
    cookTime: '',
    ingredients: '',
    stepsInstructions: '',
    source: '',
  });

  useEffect(() => {
    defaultRecipeData();
  }, [props.recipes]);

  // const [clicked, setClicked] = useState({
  //   clicked: false,
  // });

  const defaultRecipeData = (e) => {
    const recipe = props.recipes.find((recipe) => {
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
      props.recipes.map((recipe) => {
        return recipe.id === parseInt(id) ? newRecipe : recipe;
      })
    );
    props.history.push('/');
  };

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  return (
    <>
      <Row>
        <Col sm={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='RecipeId'>
              <Form.Label>Upload a Photo</Form.Label>
              <Form.Control
                type='text'
                name='DepartmentName'
                required
                disabled
                defaultValue={props.upload_photo}
                placeholder='DepartmentName'
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
}
