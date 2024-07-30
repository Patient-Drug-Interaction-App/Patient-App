document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
    const button = form.querySelector('button');

    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        const query = input.value;
        performSearch(query);
    });
});

function performSearch(query) {
    // Explicitly set the URL to the backend server
    const url = new URL('http://10.0.1.3:8000/search');
    url.searchParams.append('query', query); // Append the query parameter as expected by the backend

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            updateResults(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            displayResultsError();
        });
}

function updateResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (data && data.length > 0) {
        data.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.textContent = item.NAME; // Adjust based on your data structure, assuming 'NAME' is a key
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.textContent = 'No results found.';
    }
}

function displayResultsError() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.textContent = 'Failed to fetch results.';
}