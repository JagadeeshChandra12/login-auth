# Add Wise Tech - Authentication System

This project is a simple authentication system that allows users to log in or sign up using Supabase as the backend service. It includes a responsive design and basic form validation.

## Features

- **Login and Signup Forms**: Users can toggle between login and signup forms.
- **Supabase Integration**: Handles user authentication using Supabase's `auth` API.
- **Responsive Design**: Fully responsive UI for different screen sizes.
- **Form Validation**: Includes client-side validation for email, password, and other fields.
- **Error and Success Messages**: Displays appropriate messages for user actions.

## File Structure

- **index.html**: Main page with login and signup forms.
- **register.html**: Separate registration page with additional fields.
- **styles.css**: Contains all the styles for the project.
- **script.js**: Handles form toggling and authentication logic for `index.html`.
- **register.js**: Handles form validation and submission for `register.html`.
- **auth.js**: Handles authentication logic for the `assignment` folder.
- **style.css**: Additional styles for the `assignment` folder.

## Setup Instructions

1. Clone the repository or download the files.
2. Open the project in your preferred code editor.
3. Ensure you have an active Supabase project and replace the `supabaseUrl` and `supabaseKey` in the JavaScript files with your own credentials.
4. Open `index.html` or `register.html` in a browser to test the application.

## Dependencies

- [Supabase JS SDK](https://supabase.com/docs/reference/javascript/start): Used for authentication.

## How to Use

### Login
1. Navigate to the login form.
2. Enter your email and password.
3. Click "Login" to authenticate.

### Signup
1. Navigate to the signup form.
2. Enter your email, password, and confirm the password.
3. Agree to the terms and conditions.
4. Click "Sign Up" to create an account.

### Registration Page
1. Open `register.html`.
2. Fill in your full name, email, password, and confirm the password.
3. Click "Register" to complete the process.

## Screenshots

### Login Form
![Login Form](https://via.placeholder.com/400x300)

### Signup Form
![Signup Form](https://via.placeholder.com/400x300)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Supabase](https://supabase.com/) for providing the backend services.
- [Google Fonts](https://fonts.google.com/) for the font styles.