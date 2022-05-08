import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from "../../store/session"
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUser = e => {
    e.preventDefault();

    const credential = "Demo-lition"
    const password = "password";

    return dispatch(sessionActions.login({ credential, password }));
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
      // <NavLink className="nav-link" to="/beaches">Beaches</NavLink>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-link" to="/login">Log In</NavLink>
        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        <form
          onSubmit={demoUser}
          className="demo-login"
        >
          <button>
             Demo User
          </button>
        </form>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        <NavLink className="nav-link" to="/beaches">Beaches</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
