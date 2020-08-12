import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div>
        <Link to='/'>
          <img
            src='/Users/zscottborgh/Desktop/living-la-vida-vegan/living-la-vida-vegan/client/public/apple-touch-icon.png'
            alt='living-la-vida-vegan-icon'
            className='icon'
          />
          <h1>Living La Vida, Vegan</h1>
        </Link>
      </div>

      <div className='side-bar'>
        <Link to='/login'>
          <p className='login-button'>Login</p>
        </Link>

        <Link to='/register'>
          <p className='register-button'>Register</p>
        </Link>
      </div>
    </div>
  );
}
