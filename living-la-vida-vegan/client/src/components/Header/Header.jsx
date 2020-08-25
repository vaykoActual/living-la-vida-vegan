import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Header.css';
import { Button } from 'react-bootstrap';
import { removeToken } from '../../services/users';

export default function Header(props) {
  const history = useHistory();
  const userLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };
  return (
    <>
      <div className="header">
        <div className="image-icon">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/zumariposa/image/upload/c_scale,w_80/v1597281956/living-la-vida-vegan/apple-touch-icon_s4rh6b.png"
              alt="living-la-vida-vegan-icon"
              className="comp-icon"
            />
          </Link>
        </div>

        {props.currentUser ? (
          <div className="side buttons">
            {/* <p className='show-username'>{props.currentUser.username}</p> */}

            <Link to="/profile">
              <Button variant="outline-info" className="profile-button mx-2">
                Profile
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline-info"
                className="logout-button mx-2"
                onClick={userLogout}
              >
                Logout
              </Button>
            </Link>
          </div>
        ) : (
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
        )}
      </div>

      <Nav />
    </>
  );
}
