import React from 'react';
import './public/static/index.css'

function App() {
  return (
    <div>
      <h1>Search Results</h1>
      <form id="searchForm">
        <label htmlFor="searchInput">Search:</label>
        <input type="text" id="searchInput" placeholder="Enter search term..." />
        <button type="button" onClick={performSearch}>Search</button>
      </form>
      <div id="searchResults"></div>
    </div>
  );
}

function performSearch() {
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  const query = input.value;

  fetch(`/api/search?query=${encodeURIComponent(query)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      resultsContainer.innerHTML = '';
      if (data.length > 0) {
        data.forEach(item => {
          const resultItem = document.createElement('div');
          resultItem.textContent = item.name; // Adjust based on your data structure
          resultsContainer.appendChild(resultItem);
        });
      } else {
        resultsContainer.textContent = 'No results found.';
      }
    })
    .catch(error => {
      resultsContainer.textContent = `Error: ${error.message}`;
    });
}

export default App;