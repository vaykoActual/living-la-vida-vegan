import React, { useState } from 'react';
import './Login.css';
import { loginUser } from '../../services/users';
import { Button, Form } from 'react-bootstrap';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser(formData);
    props.setCurrentUser(userData);
    props.history.push('/profile');
  };

  return (
    <div className="login-form">
      {/* <Form>
        <h2>Living La Vida Vegan</h2>
        <Form.Group controlId="formBasicUsername">
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="outline-primary" onSubmit={handleSubmit}>
          Enter
        </Button>
      </Form> */}
      <h1>Living La Vida Vegan</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Enter</button>
      </form>
    </div>
  );
}
