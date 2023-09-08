import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthContext from './Store/Auth-context';
import './App.css';
import Layout from './MainNavigation/Layout';
import StartingPage from './Component/StartingPage/StartingPage';
import AuthForm from './Component/Auth/AuthForm';
import ProfileForm from './Component/Profile/ProfileForm';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <StartingPage />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/login">
              <AuthForm />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/profile">
              <ProfileForm />
            </Route>
          )}
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
