import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Register from '../Register/Register';
import './Header.css';
import { Button, Modal } from 'react-bootstrap';

export default function Header(props) {
  return (
    <>
      <div className="header">
        <div className="image-icon">
          <Link to="/">
            <img
              // src="https://res.cloudinary.com/zumariposa/image/upload/c_scale,w_100/v1597281956/living-la-vida-vegan/apple-touch-icon_s4rh6b.png"
              src="https://res.cloudinary.com/zumariposa/image/upload/c_scale,w_80/v1597281956/living-la-vida-vegan/apple-touch-icon_s4rh6b.png"
              alt="living-la-vida-vegan-icon"
              className="comp-icon"
            />
          </Link>
        </div>

        <div className="side buttons">
          <Link to="/login">
            <Button variant="outline-info" className="login-button mx-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="outline-info" className="register-button mx-2">
              Register
            </Button>
          </Link>
        </div>
      </div>

      <Nav />
    </>
  );
}
