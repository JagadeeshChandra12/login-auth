// Initialize Supabase client
const supabaseUrl = 'https://tdylojqfgcchpfdbroaq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkeWxvanFmZ2NjaHBmZGJyb2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMDgzNzcsImV4cCI6MjA2MzU4NDM3N30.7cIRkgYx5lWUT2hBt9kxti7dYfw2j5vOapQiLuaaZ3w';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// DOM Elements
const toggleButtons = document.querySelectorAll('.toggle-btn');
const forms = document.querySelectorAll('.auth-form');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');
const switchFormLinks = document.querySelectorAll('.switch-form');

// Function to switch forms
function switchForm(formType) {
    toggleButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.form === formType);
    });
    forms.forEach(form => {
        form.classList.toggle('active', form.id === `${formType}Form`);
    });
    loginMessage.textContent = '';
    signupMessage.textContent = '';
}

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchForm(button.dataset.form);
    });
});

switchFormLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        switchForm(link.dataset.form);
    });
});

// Handle login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        
        if (error) throw error;
        
        // Show success message
        loginMessage.textContent = 'Login successful! Redirecting...';
        loginMessage.className = 'message success';
        
        // Redirect to dashboard or home page after successful login
        setTimeout(() => {
            window.location.href = '/dashboard.html';
        }, 1500);
        
    } catch (error) {
        loginMessage.textContent = error.message;
        loginMessage.className = 'message error';
    }
});

// Handle signup form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate password match
    if (password !== confirmPassword) {
        signupMessage.textContent = 'Passwords do not match';
        signupMessage.className = 'message error';
        return;
    }
    
    try {
        // Create user in Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}/index.html`
            }
        });
        
        if (authError) throw authError;
        if (authData.user) {
            const { error: dbError } = await supabase
                .from('users')
                .insert([
                    {
                        id: authData.user.id,
                        email: email,
                        created_at: new Date().toISOString(),
                        last_login: new Date().toISOString()
                    }
                ]);
            
            if (dbError) throw dbError;
        }
        
        signupMessage.textContent = 'Registration successful! Please check your email for verification.';
        signupMessage.className = 'message success';
        signupForm.reset();
        
    } catch (error) {
        signupMessage.textContent = error.message;
        signupMessage.className = 'message error';
    }
}); 