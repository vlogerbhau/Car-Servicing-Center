/*  Login Page   */

function handleLogin(event) {
    event.preventDefault();
    const errorDiv = document.getElementById('error-message');
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
        errorDiv.textContent = 'No registered users found. Please register first.';
        return false;
    }

    const userData = JSON.parse(storedData);
    if (userData.username === username && userData.password === password) {
        alert('Login successful! Welcome back.');
        window.location.href = 'index.html';
    } else {
        errorDiv.textContent = 'Invalid username or password';
    }
    return false;
}


