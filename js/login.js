// Attach the form submit event listener after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', handleLogin);
});

// Handle login form submission
function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const correctUsername = 'admin';
  const correctPassword = 'admin123';

  if (username === correctUsername && password === correctPassword) {
    // Store login state if needed (optional)
    localStorage.setItem('isAdmin', true);

    // Redirect to the admin page if credentials are correct
    window.location.href = 'admin.html';
  } else {
    // Display an alert if credentials are incorrect
    alert('Invalid username or password!');
  }
}
