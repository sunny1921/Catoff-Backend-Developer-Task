
const apiUrl = 'http://localhost:3000/users';

async function fetchUsers() {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <span>${user.name} - ${user.email}</span>
            <button onclick="deleteUser('${user.id}')">Delete</button>
        `;
        usersDiv.appendChild(userDiv);
    });
}

async function createUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    });
    if (response.ok) {
        fetchUsers();
    }
}

async function deleteUser(id) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        fetchUsers();
    }
}

document.addEventListener('DOMContentLoaded', fetchUsers);
