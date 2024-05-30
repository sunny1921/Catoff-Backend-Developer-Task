
const apiUrl = 'http://localhost:3000/users';

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

async function fetchUsers() {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const usersDiv = document.getElementById('users-list');
    usersDiv.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <span><strong>${user.name}</strong> - ${user.email}</span>
            <button onclick="deleteUser('${user.id}')"><i class="fas fa-trash-alt"></i> Delete</button>
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
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        showPage('users');
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

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    fetchUsers();
});
