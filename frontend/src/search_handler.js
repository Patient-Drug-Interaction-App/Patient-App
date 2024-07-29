document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const patientName = document.getElementById('patientName').value;
    const url = new URL('/api/search', window.location.origin); //  URL object
    url.searchParams.append('query', patientName); // Append query parameters

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error (`HTTP error: Status ${response.status}`)
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        displayResults(data); 
        
    })
    .catch((error) => {
        console.error('Error:', error);
        displayResultsError();
    });
});

function displayResults(data)
{
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Assuming 'data' is an array of results
    data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.name; // Adjust depending on the structure of your data
        resultsContainer.appendChild(div);
    });
}

function displayResultsError() {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = 'Failed to load data. Please try again later.';
}