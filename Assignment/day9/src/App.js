import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';
import Modal from './components/Modal';
import Table from './components/Table';
import Sidebar from './components/SideBar';

function Home() {
  return <div>Welcome to the Home Page!</div>;
}

function About() {
  return <div>Learn more About Us.</div>;
}

function Contact() {
  return <div>Get in Touch with Us.</div>;
}


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const userColumns = ['Name', 'Email', 'Age'];
  const userData = [
    ['John Doe', 'john.doe@example.com', 28],
    ['Jane Smith', 'jane.smith@example.com', 34],
  ];

  const productColumns = ['Product Name', 'Price', 'In Stock'];
  const productData = [
    ['Laptop', '$999', 'Yes'],
    ['Smartphone', '$499', 'No'],
  ];

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Define the list of links
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];



  return (
    <div>
      <div className="app">
      <Card
        title="User Profile"
        image="https://via.placeholder.com/300x200"
        description="This is a user profile card displaying user information."
        footer="View Profile"
      />
      <Card
        title="Product"
        image="https://via.placeholder.com/300x200"
        description="This card showcases a product with a brief description."
        footer="Buy Now"
      />
      <Card
        title="Article"
        description="This is an article card that includes a brief description of the article."
      />
    </div>
    <div>
    <Layout>
      <Home />
      <About/>
      <Contact/>
      {/* Use <About /> or <Contact /> for different pages */}
    </Layout>
    </div>
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Confirmation</h2>
        <p>Are you sure you want to proceed?</p>
        <button onClick={closeModal}>Confirm</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>

    <div>
      <h1>User Data</h1>
      <Table columns={userColumns} data={userData} />
      
      <h1>Product Listings</h1>
      <Table columns={productColumns} data={productData} />
    </div>


    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>Content goes here...</p>
      </div>
    </div>


    </div>
  );
}

export default App;
