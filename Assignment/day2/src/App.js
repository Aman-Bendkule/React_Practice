import "./App.css";
import Product from "./components/Product";
import UserProfile from "./components/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherWidget from "./components/WeatherWidget";
import Notification from "./components/Notification";
import { useState } from "react";
import MovieList from "./components/MovieList";
import Counter from "./components/Counter";

function App() {
  const product = {
    productName: "Awesome Product",
    price: 99.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKMsC2b8rhC-zIp1_ijEACWHQMoWcmTDZOw&s",
  };

  const weatherData = {
    temperature: 25,
    condition: "Sunny",
    location: "San Francisco",
  };

  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000); // Hide modal after 3 seconds
  };

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');

  const handleMovie = (e) => {
    e.preventDefault();
    if (title && genre && year && description) {
      setMovies([
        ...movies,
        {
          title,
          genre,
          year: parseInt(year, 10),
          description,
        },
      ]);
      // Clear the form
      setTitle('');
      setGenre('');
      setYear('');
      setDescription('');
    }
  };

 



  return (
    <div className="App">
      <UserProfile
        name="aman bendkule"
        age={22}
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJaAaxjoUE666w-5xxhVconbUkMq-u7ps0g&s"
      />
      <div>
        <h1>Product List</h1>
        <Product
          productName={product.productName}
          price={product.price}
          image={product.image}
        />
      </div>

      <div>
        <h1>Weather Information</h1>
        <WeatherWidget
          temperature={weatherData.temperature}
          condition={weatherData.condition}
          location={weatherData.location}
        />
      </div>

      <div>
      
      <h1>Notification Modals</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select
            className="form-control"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Show Notification</button>
      </form>

      <Notification 
        message={message}
        type={type}
        show={showModal}
        onClose={() => setShowModal(false)}
      />

      </div>
    
      <div>
      <h1 className="my-4">Dynamic Movie List</h1>
      <form onSubmit={handleMovie} className="mb-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">Year</label>
          <input
            type="number"
            className="form-control"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Movie</button>
      </form>

      <MovieList movies={movies} />

      </div>
    

    <div>
    <h1 className="my-4">React Counter Example</h1>
    <Counter />
    </div>
    
    
    </div>
  );
}

export default App;
