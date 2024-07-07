import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // Import the CSS file

function Library() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://imdb146.p.rapidapi.com/v1/name/',
        params: { id: 'nm0000093' },
        headers: {
          'x-rapidapi-key': 'a9fd8fb752mshd7ab6fb3e318daap1485f1jsn2863c178984f',
          'x-rapidapi-host': 'imdb146.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="library-container">
      {data ? (
        <div className="card">
          {/* <h2>{data.title}</h2> */}
          <div className="award-summary">
            <p><strong>Total Wins:</strong> {data.wins.total}</p>
            <p><strong>Total Nominations:</strong> {data.nominations.total}</p>
            <p><strong>Oscar Wins:</strong> {data.prestigiousAwardSummary.wins}</p>
            <p><strong>Oscar Nominations:</strong> {data.prestigiousAwardSummary.nominations}</p>
          </div>
          <div className="images">
            {data.images.edges.map((image, index) => (
              <div key={index} className="image">
                <img src={image.node.url} alt={image.node.caption.plainText} />
                <p>{image.node.caption.plainText}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Library;