import { Route, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Store/Auth-context";


const MainNavigation = () => {
    const authCtx = useContext(AuthContext);
  
    const isLoggedIn = authCtx.isLoggedIn;
  
    const logoutHandler = () => {
      authCtx.logout();
    };
  
    return (
      <header>
        <Link to="/">
          <div>React Auth</div>
        </Link>
        <nav>
          <ul>
            <Route path="/" exact>
              {!isLoggedIn && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              )}
            </Route>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default MainNavigation;
  
