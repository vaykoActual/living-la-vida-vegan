import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav-section'>
      <Link to='/profile'>
        <p>profile</p>
      </Link>
      <Link to='/recipes/new'>
        <p>add</p>
      </Link>
      <Link to='/recipes'>
        <p>home</p>
      </Link>
      <p>favs</p>
      <p>share</p>
    </div>
  );
}
