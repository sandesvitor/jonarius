// Function to fetch users and render them
function fetchAndRenderUsers() {
    fetch('http://localhost:8080/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return response.json();
    })
    .then(users => {
        console.log(users)
        const usersContainer = document.getElementById('users-container');
        // Clear the users container
        usersContainer.innerHTML = '';
        
        // Loop through each user and create a div block for each one
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `
                <h1>${user.name}</h1>
                <h3>${user.email}</h3>
            `;
            userDiv.id = user.id
            usersContainer.appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching users:', error);
        // Optionally, you can display an error message to the user
    });
}

// Call fetchAndRenderUsers when the page loads
window.addEventListener('load', fetchAndRenderUsers);
