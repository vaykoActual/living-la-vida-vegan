import React from 'react';

export default function Nav() {
  return (
    <div>
      <Link to='/profile'>
        <p>profile</p>
      </Link>
      <Link to='/recipes/new'>
        <p>add</p>
      </Link>
      <Link to='/recipes'>
        <p>home</p>
      </Link>
      <Link>
        <p>favs</p>
      </Link>
      <Link>
        <p>share</p>
      </Link>
    </div>
  );
}
