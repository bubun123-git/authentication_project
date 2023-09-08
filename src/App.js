import React from 'react'; // Make sure to import React
import AuthForm from './Component/Auth/AuthForm';
import './App.css';
import MainNavigation from './MainNavigation/MainNavigation';



function App() {
  return (
    <div className='App'>
      <MainNavigation/>
      
      <AuthForm />
     
    </div>
  );
}

export default App;
