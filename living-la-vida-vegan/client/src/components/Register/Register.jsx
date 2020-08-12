import React, { useState } from 'react';
import './Register.css';
import { registerUser } from '../../services/users';
import { Button } from 'react-bootstrap';

export default function Register(props) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirm_password: '',
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
    const userData = await registerUser(formData);
    props.setCurrentUser(userData);
    props.history.push('/');
  };

  return (
    <div>
      <form className='d-flex flex-column' onSubmit={handleSubmit}>
        <h3>Make an Account</h3>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Username'
        />
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
        />
        <input
          type='password'
          name='confirm-password'
          value={formData.confirm_password}
          onChange={handleChange}
          placeholder='Confirm Password'
        />
        <Button variant='outline-primary'>Next</Button>
      </form>
    </div>
  );
}
