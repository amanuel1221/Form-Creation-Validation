document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isvalid = true;
    const messages = [];

    if (username === '') { 
        isvalid = false;
        messages.push('Username is required.');
    }
    if (username.length < 3) {
        isvalid = false;
        messages.push('Username must be at least 3 characters long.');
    }
    if (email === '') {
        isvalid = false;
        messages.push('Email is required.');
    }
    if (email.includes('@') === false) {
        isvalid = false;
        messages.push('Email must be a valid email address.');
    }
    if (email.length < 5) {
        isvalid = false;
        messages.push('Email must be at least 5 characters long.');
    }
    if (!email.includes('.')) {
        isvalid = false;
        messages.push('Email must contain a dot (.) character.');
    }
    if (password === '') {
        isvalid = false;
        messages.push('Password is required.');
    }
    if (password.length < 8) {
        isvalid = false;
        messages.push('Password must be at least 8 characters long.');
    }
    feedbackDiv.style.display = 'block';
    if (isvalid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
    }
    });
      });