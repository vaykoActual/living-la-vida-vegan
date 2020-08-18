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
          alt="nav-bar-icons"
        />
      </Link>
      <Link to="/new/recipes">
        <img
          src="https://res.cloudinary.com/zumariposa/image/upload/v1597626078/living-la-vida-vegan/Untitled_Artwork_2_th0kir.png"
          className="add-icon"
          alt="nav-bar-icons"
        />
      </Link>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/zumariposa/image/upload/v1597626078/living-la-vida-vegan/Untitled_Artwork_4_pmykef.png"
          className="home-icon"
          alt="nav-bar-icons"
        />
      </Link>
      <img
        src="https://res.cloudinary.com/zumariposa/image/upload/v1597788317/living-la-vida-vegan/logos_resize_2_wefw5e.png"
        className="fav-icon"
        alt="nav-bar-icons"
      />
      <img
        src="https://res.cloudinary.com/zumariposa/image/upload/v1597627390/living-la-vida-vegan/Untitled_Artwork_7_maqx39.png"
        className="share-icon"
        alt="nav-bar-icons"
      />
      <Link to="/">
        <img
          src="https://res.cloudinary.com/zumariposa/image/upload/v1597788006/living-la-vida-vegan/logos_resize_vmarr1.png"
          className="contact-icon"
          alt="nav-bar-icons"
        />
      </Link>
    </div>
  );
}
