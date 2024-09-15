import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEye, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../global.css';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/users/register', { email, password });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Register</h2>
        <p>
          By registering you are agreeing to our <a href="#">Terms and Privacy Policy</a>
        </p>
        <div className="toggle-buttons">
          <a href="#">Login</a>
          <a href="#" className="active">Register</a>

        </div>
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
        <button type="submit" className="register-btn">Register</button>

        {error && <p className="error-message">{error}</p>}
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

export default Register;