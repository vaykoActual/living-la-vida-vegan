import React, { useState } from 'react';
import './Register.css';
import { registerUser } from '../../services/users';

export default function Register(props) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    img_url: '',
    about_me: '',
    likes_interests: '',
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
    <>
      <div className="register">
        <form className="register-form" onSubmit={handleSubmit}>
          <h3 className="register-title">MAKE AN ACCOUNT</h3>
          <input
            className="form-input"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            className="form-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            className="form-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            className="form-input"
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          <h4 className="register-title" onClick={handleClick}>
            NEXT
          </h4>
          {clicked ? (
            ''
          ) : (
            <div>
              <input
                className="form-input"
                type="text"
                name="img_url"
                value={formData.img_url}
                onChange={handleChange}
                placeholder="Image URL"
              />
              <input
                className="form-input"
                type="text"
                name="about_me"
                value={formData.about_me}
                onChange={handleChange}
                placeholder="Add About Me"
              />
              <input
                className="form-input"
                type="text"
                name="likes_interests"
                value={formData.likes_interests}
                onChange={handleChange}
                placeholder="Any Likes or Interests?"
              />
              <button className="register-button">Save</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
