import React, { useState } from 'react';
import '../assets/css/UserGreeting.css';

const UserGreeting = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ name: 'John Doe' }); // Simulating a user login
  };

  const handleLogout = () => {
    setUser(null); // Simulating a user logout
  };

  return (
    <div className="greeting-container">
      {user ? (
        <h1>Hello, {user.name}!</h1>
      ) : (
        <h1>Hello, Guest!</h1>
      )}
      {user ? (
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

export default UserGreeting;
