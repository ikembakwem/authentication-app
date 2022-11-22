import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy login handler
  const loginHandler = (email, password) => {
    // In a real App we would check email and password before updating isLoggeIn state
    setIsLoggedIn(true);
  };

  // Logout handler
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
