// Check if the user is logged in as an admin
const isAdmin = localStorage.getItem('isAdmin');

if (!isAdmin) {
  // If not an admin, redirect to login page
  window.location.href = 'login.html';
}

// Handle the Log Out process
document.getElementById('logout-btn').addEventListener('click', function() {
  // Remove the isAdmin flag from localStorage
  localStorage.removeItem('isAdmin');
  
  // Redirect to the home page or any other page
  window.location.href = 'index.html'; // Or choose another page as the default
});

// Handle actions for Edit and Delete Product
document.getElementById('editproduct').addEventListener('click', function() {
  // Example: Navigate to product edit page (or provide an edit function here)
  window.location.href = 'editproduct.html'; // Redirect to edit page
});

document.getElementById('deleteproduct').addEventListener('click', function() {
  // Example: Implement delete product logic (use product ID or other identifiers)
  if (confirm('Are you sure you want to delete this product?')) {
    // Your delete logic here (e.g., call API or modify data)
    alert('Product deleted successfully.');
  }
});