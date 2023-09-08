import React from 'react'; // Make sure to import React
import AuthForm from './Component/Auth/AuthForm';
import './App.css';
import { Route } from 'react-router-dom';
import Layout from './MainNavigation/Layout';
import StartingPage from './Component/StartingPage/StartingPage';
import ProfileForm from './Component/Profile/ProfileForm';


function App() {
  return (
    <div className='App'>
      <Layout />
      <Route path='/' >
        <StartingPage />
      </Route>
      <Route path='/login' >
        <AuthForm />
      </Route>
      <Route path='/profile' >
        <ProfileForm />
      </Route>
      <Route path='*' element={<StartingPage />} />








    </div>
  );
}

export default App;