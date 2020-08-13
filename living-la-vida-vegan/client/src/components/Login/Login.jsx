import React, { useState } from 'react';
import './Login.css';
import { loginUser } from '../../services/users';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
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
    props.history.push('/');
  };

  return (
    <div className='login-form'>
      <h1>Living La Vida Vegan</h1>
      <form onSubmit={handleSubmit}>
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
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm Password'
        />
        <button>Enter</button>
      </form>
    </div>
  );
}
