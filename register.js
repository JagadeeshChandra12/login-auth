document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Basic validation
    if (!fullname || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    // Name validation (at least 2 words)
    const nameWords = fullname.trim().split(/\s+/);
    if (nameWords.length < 2) {
        alert('Please enter your full name (first and last name)');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Password validation (minimum 8 characters, at least one number and one letter)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Here you would typically make an API call to your backend
    console.log('Registration attempt:', { fullname, email, password });
    alert('Registration successful! Please login.');
    window.location.href = 'index.html';
}); 