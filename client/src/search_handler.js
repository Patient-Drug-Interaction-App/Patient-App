document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const patientName = document.getElementById('patientName').value;

    fetch('/search', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientName: patientName })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
    });
});