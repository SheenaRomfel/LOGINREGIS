
import React from 'react';

function RegisterForm() {
  return (
    <div className="wrap">
    <div className="form-box register">
      <h2>Register</h2>
      <form action="#">
        <div className="input-box">
          <span className="icon">
            <ion-icon name="person-sharp"></ion-icon>
          </span>
          <input type="text" required />
          <label>Username</label>
        </div>

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
          <label><input type="checkbox" /> I agree with the terms & conditions</label>
          <a href="#">Forgot password</a>
        </div>
        <button type="submit" className="btn">Register</button>
        <div className="login-register">
        <p>Don't have an account? <a href="/" className="register-link">Login</a></p>


        </div>
      </form>
    </div>
    </div>
  );
}

export default RegisterForm;
