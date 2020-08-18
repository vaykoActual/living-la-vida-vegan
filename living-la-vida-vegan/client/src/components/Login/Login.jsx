import React, { useState } from 'react';
import './Login.css';
import { loginUser } from '../../services/users';

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
    <div className="login">
      <h1 className="login-title">LOGIN</h1>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button className="login-button">Enter</button>
      </form>
    </div>
  );
}
