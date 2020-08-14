import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className='header'>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/zumariposa/image/upload/c_scale,w_100/v1597281956/living-la-vida-vegan/apple-touch-icon_s4rh6b.png'
            alt='living-la-vida-vegan-icon'
            className='comp-icon'
          />
        </Link>

        <div className='side-bar'>
          <Link to='/login'>
            <p className='login-button'>Login</p>
          </Link>

          <Link to='/register'>
            <p className='register-button'>Register</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
