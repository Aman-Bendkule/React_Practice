// src/components/Layout.js
import React from 'react';
import '../assets/css/layout.css'; // Import the CSS file for styling

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>My Application</h1>
        <nav className="layout-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <p>&copy; 2024 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
