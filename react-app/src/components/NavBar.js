import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "../navigation.css";

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const [showDropdown, setShowDropdown] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const dropdown = () => {
    if (showDropdown) return;
    setShowDropdown(true);
    setShowButton(false);
  };

  useEffect(() => {
    if (!showDropdown) return;

    const closeDropdown = () => {
      setShowDropdown(false);
      setShowButton(true);
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown)
  }, [showDropdown])

  const demoLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const demoUser = await response.json();
  };

  return (
    <nav>
      <NavLink to="/"> showboat </NavLink>
      <ul className="navmenu">
        {user? (<>
          <li className="navitem">
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          {/* <li className="navitem">
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          </li> */}
          <li className="navitem">
            <NavLink to="/users/:id/upload/" exact={true} activeClassName="active">
              Upload Photo
            </NavLink>
          </li>
            {showButton && (
              <button className="profile-button" onClick={dropdown}>
                <i className="fas fa-user-circle" />
              </button>
            )}
            {showDropdown && (
              <div className="profile-dropdown">
                <div className="profile-dropdown-buttons">Hello, <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>!</div>
                <div className="profile-dropdown-buttons"> <NavLink to={`/users/${user.id}/photos`}>Your Photos</NavLink></div>
                <div className="profile-dropdown-buttons"> <LogoutButton /> </div>
              </div>
            )}
          </>) : (
          <>
              <button type="button" id="demo-button" onClick={demoLogin}>
                Demo User
              </button>
            <li className="navitem">
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink to="/login" exact={true} activeClassName="active">
                Log In
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
