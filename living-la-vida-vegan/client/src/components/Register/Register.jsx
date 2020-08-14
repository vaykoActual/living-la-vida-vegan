import React, { useState } from 'react';
import './Register.css';
import { registerUser } from '../../services/users';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import RegisterCont from './RegisterCont';

export default function Register(props) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    uploadPhoto: '',
    aboutMe: '',
    likesInterests: '',
  });

  const [clicked, setClicked] = useState({
    clicked: false,
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
    props.history.push('/profile');
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <form className='register-form' onSubmit={handleSubmit}>
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
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm Password'
        />
        <p onClick={handleClick}>Next</p>
        {clicked ? (
          ''
        ) : (
          <div>
            <input
              type='text'
              name='uploadPhoto'
              value={formData.uploadPhoto}
              onChange={handleChange}
              placeholder='Image URL'
            />
            <input
              type='text'
              name='aboutMe'
              value={formData.aboutMe}
              onChange={handleChange}
              placeholder='share a few words about yourself'
            />
            <input
              type='text'
              name='likesInterests'
              value={formData.likesInterests}
              onChange={handleChange}
              placeholder='any likes or interests?'
            />
            {/* <Link to='/'> */}
            <button>Save</button>
            {/* </Link> */}
          </div>
        )}
      </form>
    </div>
  );
}
