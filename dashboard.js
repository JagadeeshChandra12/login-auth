// Initialize Supabase client
const supabaseUrl = 'https://tdylojqfgcchpfdbroaq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkeWxvanFmZ2NjaHBmZGJyb2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMDgzNzcsImV4cCI6MjA2MzU4NDM3N30.7cIRkgYx5lWUT2hBt9kxti7dYfw2j5vOapQiLuaaZ3w';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// DOM Elements
const userEmailElement = document.getElementById('userEmail');
const lastLoginElement = document.getElementById('lastLogin');
const logoutBtn = document.getElementById('logoutBtn');

// Check authentication status
async function checkAuth() {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error || !user) {
        window.location.href = '/index.html';
        return;
    }
    
    // Update user email
    userEmailElement.textContent = user.email;
    
    // Get user data from database
    const { data: userData, error: dbError } = await supabase
        .from('users')
        .select('last_login')
        .eq('id', user.id)
        .single();
    
    if (userData && !dbError) {
        const lastLogin = new Date(userData.last_login);
        lastLoginElement.textContent = lastLogin.toLocaleString();
        
        // Update last login time
        await supabase
            .from('users')
            .update({ last_login: new Date().toISOString() })
            .eq('id', user.id);
    }
}

// Handle logout
logoutBtn.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
        window.location.href = '/index.html';
    }
});

// Initialize dashboard
checkAuth(); 