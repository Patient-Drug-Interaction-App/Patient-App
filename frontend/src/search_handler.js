document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
    const button = form.querySelector('button');
    const resultsContainer = document.getElementById('searchResults'); // Ensure this matches your HTML

    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        const query = input.value;
        button.disabled = true; // Disable button during the search
        resultsContainer.textContent = 'Loading...'; // Feedback for loading
        performSearch(query).finally(() => {
            button.disabled = false; // Re-enable button after search
        });
    });
});

function performSearch(query) {
    const url = new URL('http://10.0.1.3:8000/search');
    url.searchParams.append('query', query);

    return fetch(url)
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
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.textContent = item.NAME; // Adjust based on your data structure
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.textContent = 'No results found.';
    }
}

function displayResultsError() {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.textContent = 'Failed to fetch results.';
}