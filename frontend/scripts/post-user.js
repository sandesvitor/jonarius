// Open the popup when the "Add User" button is clicked
document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

// Close the popup when the close button (X) is clicked
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Submit user data when the "Submit" button is clicked
document.getElementById('submitUser').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const payload = {
        name: name,
        email: email
    };

    // Make POST request to API
    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
        return response.json();
    })
    .then(data => {
        console.log('User added successfully:', data);
        window.location.reload();
    })
    .catch(error => {
        console.error('Error adding user:', error);
    });

    // Close the popup after submission
    document.getElementById('popup').style.display = 'none';
});
