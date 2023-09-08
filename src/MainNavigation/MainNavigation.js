import { Route, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Store/Auth-context";

import '../MainNavigation/MainNavigation.css'

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <nav className="navbar">
      <NavLink to="/" exact className="navbar-logo">
        React Auth
      </NavLink>
      <ul className="navbar-nav">
        <Route path="/" exact>
          {!isLoggedIn && (
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profile 
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <button onClick={logoutHandler} className="nav-link-button">
                Logout
              </button>
            </li>
          )}
        </Route>
      </ul>
    </nav>
  );
};

export default MainNavigation;