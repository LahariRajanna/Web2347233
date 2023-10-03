import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PopularMovies from './PopularMovies';

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = '904da5d6';

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]); // Clear results if the search term is empty
    } else {
      axios
        .get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
        .then((response) => {
          setSearchResults(response.data.Search || []);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchTerm, apiKey]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.imdbID} className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
       <PopularMovies /> {/* Display popular movies component */}
    </div>
  );
};

export default MovieList;
