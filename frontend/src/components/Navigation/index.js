import React from 'react';
import { NavLink, Link, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from "../../store/session"
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

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
      // <NavLink className="nav-link" to="/beaches">Beaches</NavLink>
    );
  } else {
    sessionLinks = (
      <>
        <div className="nav-container">
          <div className="nav-right">
            <NavLink className="nav-link" to="/login">Log In</NavLink>
            <NavLink className="nav-link" id="sign-up-button" to="/signup">Sign Up</NavLink>

          </div>
          <form
            onSubmit={demoUser}
            className="demo-login"
          >
            <button id="demo-button">
              Demo User
            </button>
          </form>
          {/* <NavLink className="nav-link" id='beaches-button' to="/beaches">Beaches</NavLink> */}
        </div>
      </>
    );
  }

  if (!sessionUser) {
    sessionLinks = (
      <NavLink to="/beaches">Kelp</NavLink>
    )
  }


  return (
    <ul className="nav-ul">
      <li >
        <NavLink className='nav-link' id='beaches-button' to="/beaches">Beaches</NavLink>
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
