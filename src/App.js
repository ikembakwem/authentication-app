import React, { useEffect, useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // Dummy login handler
  // const loginHandler = (email, password) => {
  //   // In a real App we would check email and password before updating isLoggeIn state
  //   setIsLoggedIn(true);
  // };

  // // Logout handler
  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
