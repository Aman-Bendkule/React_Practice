import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = ({ movies }) => {
  return (
    <div className="container">
      <h2 className="my-4">Movie List</h2>
      <div className="list-group">
        {movies.map((movie, index) => (
          <div className="list-group-item" key={index}>
            <h5 className="mb-1">{movie.title}</h5>
            <p className="mb-1"><strong>Genre:</strong> {movie.genre}</p>
            <p className="mb-1"><strong>Year:</strong> {movie.year}</p>
            <p className="mb-1"><strong>Description:</strong> {movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
