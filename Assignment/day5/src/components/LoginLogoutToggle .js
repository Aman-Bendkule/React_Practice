import React, { useState } from 'react';
import '../assets/css/LoginLogoutToggle.css';

const LoginLogoutToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="login-logout-container">
      <h1>{isLoggedIn ? 'Welcome, User!' : 'Please Log In'}</h1>
      {isLoggedIn ? (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginLogoutToggle;
