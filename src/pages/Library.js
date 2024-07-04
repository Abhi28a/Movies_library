import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { 
  retries: 5, 
  retryCondition: (error) => error.response.status === 429,
  retryDelay: (retryCount) => axiosRetry.exponentialDelay(retryCount)
});

const Library = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get('https://movies-ratings2.p.rapidapi.com/ratings', {
          params: { limit: 50 }, // Assuming the API supports a limit parameter
          headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'movies-ratings2.p.rapidapi.com'
          }
        });
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movieData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Movie Library</h1>
      <ul>
        {currentItems.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={movieData.length} 
        paginate={paginate} 
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Library;
