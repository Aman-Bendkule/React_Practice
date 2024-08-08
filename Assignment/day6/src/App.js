import { useState } from 'react';
import './App.css';
import  Menu  from './components/Menu';
import Quotes from './components/quotes';
import { TodoList } from './components/TodoList';
import { Gallery } from './components/Gallery';
import ContactList from './components/ContactList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleMenuItemClick = (section) => {
    setActiveSection(section);
  };

  const imageUrls = [
    'https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1574169208507-84376144848b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww'
  ];

  const contacts = [
    { id: 1, name: 'John Doe', phone: '555-1234', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '555-5678', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', phone: '555-8765', email: 'bob@example.com' }
  ];

  return (
    <>
      <Quotes/>
      <TodoList/>
      <div>
      <Menu onMenuItemClick = {handleMenuItemClick} />
      {activeSection === 'home' && (
        <section id="home">
          <h2>Home Section</h2>
          <p>Welcome to the Home page.</p>
        </section>
      )}
      {activeSection === 'about' && (
        <section id="about">
          <h2>About Section</h2>
          <p>Welcome to the About page.</p>
        </section>
      )}
      {activeSection === 'services' && (
        <section id="services">
          <h2>Services Section</h2>
          <p>Welcome to the Services page.</p>
        </section>
      )}
      {activeSection === 'contact' && (
        <section id="contact">
          <h2>Contact Section</h2>
          <p>Welcome to the Contact page.</p>
        </section>
      )}
    </div>

    <div style={{padding:'20px'}}>
        <h1>Image Gallery</h1>
        <Gallery imageUrls={imageUrls}/>
    </div>

    <div style={{ padding: '20px' }}>
      <h1>Contact List</h1>
      <ContactList contacts={contacts} />
    </div>

    <div>
      <ShoppingCart/>
    </div>
    </>
  );
}

export default App;
