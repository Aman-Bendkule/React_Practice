// src/components/Sidebar.js
import React, { useState } from 'react';
import '../assets/css/sidebar.css'; // Import the CSS file for styling

function Sidebar({ links, isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="sidebar-close" onClick={onClose}>
        &times;
      </button>
      <ul className="sidebar-menu">
        {links.map((link) => (
          <li key={link.href} className="sidebar-item">
            <a href={link.href} className="sidebar-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
