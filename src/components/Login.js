// src/components/Login.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEye, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../global.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login logic
    if (email && password) {
      navigate('/home'); // Redirect to homepage after login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <p>
          By signing in you are agreeing to our <a href="#">Terms and Privacy Policy</a>
        </p>
        {/* <div className="toggle-buttons">
          <a href="#" className="active">Login</a>
          <a href="#">Register</a>
        </div> */}
        <div className="input-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={faEye}
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember password
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="login-btn">Login</button>
        <p>or connect with</p>
        <div className="social-icons">
          <a href="#" className="icon facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="icon instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="icon pinterest">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#" className="icon linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="fingerprint-icon">
          <FontAwesomeIcon icon={faFingerprint} className="icon" />
        </div>
      </form>
    </div>
  );
};

export default Login;
