import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // Import the CSS file

function Library({ ids }) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async (id) => {
      const options = {
        method: 'GET',
        url: 'https://imdb146.p.rapidapi.com/v1/name/',
        params: { id },
        headers: {
          'x-rapidapi-key': 'a9fd8fb752mshd7ab6fb3e318daap1485f1jsn2863c178984f',
          'x-rapidapi-host': 'imdb146.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(`Error fetching data for ID ${id}:`, error);
        return null; // Return null for failed requests
      }
    };

    const fetchAllData = async () => {
      const promises = ids.map(id => fetchData(id));
      const results = await Promise.all(promises);
      setDataList(results.filter(data => data !== null)); // Filter out null responses
    };

    fetchAllData();
  }, [ids]);

  return (
    <div className="library-container">
      {dataList.length > 0 ? (
        dataList.map((data, index) => (
          <div key={index} className="card">
            <h2>ID: {data.id}</h2>
            <div className="award-summary">
              <p><strong>Total Wins:</strong> {data.wins ? data.wins.total : 'N/A'}</p>
              <p><strong>Total Nominations:</strong> {data.nominations ? data.nominations.total : 'N/A'}</p>
              <p><strong>Oscar Wins:</strong> {data.prestigiousAwardSummary ? data.prestigiousAwardSummary.wins : 'N/A'}</p>
              <p><strong>Oscar Nominations:</strong> {data.prestigiousAwardSummary ? data.prestigiousAwardSummary.nominations : 'N/A'}</p>
            </div>
            <div className="images">
              {data.images && data.images.edges.map((image, imgIndex) => (
                <div key={imgIndex} className="image">
                  <img src={image.node.url} alt={image.node.caption ? image.node.caption.plainText : 'Image'} />
                  <p>{image.node.caption ? image.node.caption.plainText : 'Image Caption'}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Library;
