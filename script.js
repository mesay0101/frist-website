document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const successMessage = document.getElementById('successMessage');

    if (name && email && message) {
        // Display success message
        successMessage.classList.remove('hidden');
    } else {
        alert('Please fill in all fields.');
    }
});
