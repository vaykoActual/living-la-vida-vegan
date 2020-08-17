import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="nav-section">
      <Link to="/profile">
        <img
          src="https://res.cloudinary.com/zumariposa/image/upload/v1597626078/living-la-vida-vegan/Untitled_Artwork_3_a60njk.png"
          className="profile-icon"
        />
      </Link>
      <Link to="/new/recipes">
        <img
          src="https://res.cloudinary.com/zumariposa/image/upload/v1597626078/living-la-vida-vegan/Untitled_Artwork_2_th0kir.png"
          className="add-icon"
        />
      </Link>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/zumariposa/image/upload/v1597626078/living-la-vida-vegan/Untitled_Artwork_4_pmykef.png"
          className="home-icon"
        />
      </Link>
      <img
        src="https://res.cloudinary.com/zumariposa/image/upload/v1597627389/living-la-vida-vegan/Untitled_Artwork_6_y2mzhu.png"
        className="fav-icon"
      />
      <img
        src="https://res.cloudinary.com/zumariposa/image/upload/v1597627390/living-la-vida-vegan/Untitled_Artwork_7_maqx39.png"
        className="share-icon"
      />
    </div>
  );
}
