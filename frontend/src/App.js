import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/search")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Search Results</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li> // Adjust key and item properties based on your data structure
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default App;