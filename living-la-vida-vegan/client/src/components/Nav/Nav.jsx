import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className='nav-section'>
      <Link to='/profile'>
        <p className='profile-opt'>profile</p>
      </Link>
      <Link to='/recipes/new'>
        <p className='profile-opt'> add</p>
      </Link>
      <Link to='/recipes'>
        <p className='profile-opt'>home</p>
      </Link>
      <p className='profile-opt'>favs</p>
      <p className='profile-opt'>share</p>
    </div>
  );
}
