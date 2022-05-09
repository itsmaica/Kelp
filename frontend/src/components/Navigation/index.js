import React from 'react';
import { NavLink, Link, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from "../../store/session"
import logo from "../../images/logo.png"

import './Navigation.css';

function Navigation({ isLoaded }){

  const { pathname } = useLocation();


  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUser = e => {
    e.preventDefault();

    const credential = "Demo-lition"
    const password = "password";

    return dispatch(sessionActions.login({ credential, password }));
  };

  let navBar;

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />

    );
  } else {
    sessionLinks = (
      <>
        <div className="nav-container">
          <div className="nav-right">
            <NavLink className="nav-link" to="/login">Log In</NavLink>
            <NavLink className="nav-link" id="sign-up-button" to="/signup">Sign Up</NavLink>

          </div>
        </div>
      </>
    );
  }

  return (
    <ul className="nav-ul">
      <li>
        <div id="nav-align">
        <NavLink className='nav-link' id='beaches-button' to="/beaches">Beaches</NavLink>
        {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
