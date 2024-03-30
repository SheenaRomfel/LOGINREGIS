import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function LoginForm() {
  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember Me</label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="login-register">
            <p>Don't have an account? <Link to="/register" className="register-link">Register</Link></p> {/* Use Link for navigation */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
