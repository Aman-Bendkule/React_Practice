import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.slice(0, 4)); // Show only the first 4 rows
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="container text-center my-4">Loading...</div>;
  }

  if (error) {
    return <div className="container text-center my-4 text-danger">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="my-4">Fetched Data (First 4 Rows)</h1>
      <ul className="list-group">
        {data.map(item => (
          <li key={item.id} className="list-group-item">
            <h5>{item.title}</h5>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
