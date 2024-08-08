import React, { useState } from 'react';
import '../assets/css/ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`theme-container ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
      <button className="theme-button" onClick={handleThemeToggle}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
