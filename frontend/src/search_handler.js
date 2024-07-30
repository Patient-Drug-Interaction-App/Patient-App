document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const patientName = document.getElementById('patientName').value;

    fetch(`/api/search?query=${encodeURIComponent(patientName)}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Process and display the data here
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
    });
});