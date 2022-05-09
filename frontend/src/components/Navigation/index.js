import React from 'react';
import { NavLink, Link, useLocation, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from "../../store/session"
import logo from "../../images/logo.png"

import './Navigation.css';

function Navigation({ isLoaded }){

  const { pathname } = useLocation();

  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUser = e => {
    e.preventDefault();

    const credential = "Demo-lition"
    const password = "password";

    return dispatch(sessionActions.login({ credential, password }));
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="demo-navigation">

          <div className="nav-kelp-left-container">
            <NavLink id="demo-kelp-nav-link" to="/">Kelp</NavLink>
            <img id="logo-header" src={logo}/>
          </div>

          <div className="nav-kelp-right-container">
            <ProfileButton className="profile-button" user={sessionUser} />
            <p className="message">Welcome To Kelp!</p>
            <NavLink onClick={logout} className="demo-logout" to="/">Logout</NavLink>
          </div>

        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="nav-container">
        <NavLink className='nav-link' id='beaches-button' to="/beaches">Beaches</NavLink>

          <div className="nav-right">
            <NavLink className="nav-link" to="/login">Log In</NavLink>
            <NavLink className="nav-link" id="sign-up-button" to="/signup">Sign Up</NavLink>

          </div>
        </div>
      </>
    )
  }

  if (sessionUser && pathname === "/") {
    sessionLinks = (
      <>
      <div className="demo-navigation2">
        {/* <ProfileButton className="profile-button" user={sessionUser} /> */}
        <div id="beaches-div">
          <NavLink className='nav-link' id='beaches-button' to="/beaches">Beaches</NavLink>
        </div>
          <div className="nav-kelp-right-container2">
            <p id="message-white">Welcome to Kelp!</p>
            <NavLink onClick={logout} className="demo-logout2" to="/">Logout</NavLink>
          </div>

      </div>
      </>
    )
  };


  // no user in splash page - no state
  if (!sessionUser && pathname!== "/") {
    sessionLinks = (
      <>
      <div className="none-session-container-k">

        <div id="left-div-non-u-k">
          <div className="nav-kelp-left-container0">
            <NavLink id="demo-kelp-nav-link" to="/">Kelp</NavLink>
            <img id="logo-header" src={logo}/>
          </div>
        </div>

        <div id="right-div-non-u">
          <NavLink  id="log-1" to="/login">Log In</NavLink>
          <NavLink  id="up-2" to="/signup">Sign Up</NavLink>
        </div>

      </div>
      </>

    )
  }

  if ((sessionUser?.id === 1)) {
    sessionLinks = (
      <>
        <div className="demo-navigation">

          <div className="nav-kelp-left-container">
            <NavLink id="demo-kelp-nav-link" to="/">Kelp</NavLink>
            <img id="logo-header" src={logo}/>
          </div>

          <div className="nav-kelp-right-container">
            <ProfileButton className="profile-button" user={sessionUser} />
            <p className="message">Welcome, Demo User!</p>
            <NavLink onClick={logout} className="demo-logout" to="/">Logout</NavLink>
          </div>

        </div>
      </>
    )
  };

  if (sessionUser?.id === 1 && pathname === "/") {
    sessionLinks = (
      <>
      <div className="demo-navigation2">
        {/* <ProfileButton className="profile-button" user={sessionUser} /> */}
        <div id="beaches-div">
          <NavLink className='nav-link' id='beaches-button' to="/beaches">Beaches</NavLink>
        </div>
          <div className="nav-kelp-right-container2">
            <p id="message-white">Welcome, Demo User</p>
            <NavLink onClick={logout} className="demo-logout2" to="/">Logout</NavLink>
          </div>

      </div>
      </>
    )
  };



  return (
    <ul className="nav-ul">
      <li>
        <div id="nav-align">

        {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
