import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory, useParams } from 'react-router-dom'
import { populateUserBeaches } from '../../store/userBeaches'


function ProfileButton({ user }) {

  const userId = useSelector(state => state.session.user)

  const history = useHistory();

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  const toProfile = (e, userId) => {
    e.preventDefault();
    dispatch(populateUserBeaches(userId?.id))
    history.push("/id/beaches")
  }


  return (
    <>
      <button id="prof-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button className="b" onClick={toProfile}>Profile</button>
          </li>
          <li>
            <button className="b" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
