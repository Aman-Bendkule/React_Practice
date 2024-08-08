import React from 'react';

const menuItems = [
  { id: 1, name: 'Home', link: 'home' },
  { id: 2, name: 'About', link: 'about' },
  { id: 3, name: 'Services', link: 'services' },
  { id: 4, name: 'Contact', link: 'contact' }
];

function Menu({ onMenuItemClick }) {
  return (
    <nav>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <button onClick={() => onMenuItemClick(item.link)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
