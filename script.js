document.getElementById('get-started-button').addEventListener('click', function() {
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'block';
});

document.getElementById('signup-button').addEventListener('click', function() {
    alert('Redirecting to Sign Up page...');
    // Here you can add code to redirect to the Sign-Up page.
});

document.getElementById('login-button').addEventListener('click', function() {
    alert('Redirecting to Login page...');
    // Here you can add code to redirect to the Login page.
});
