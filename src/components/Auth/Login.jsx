import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing custom CSS

function Login() {
  const defaultUsername = 'qwerty1234';
  const defaultPassword = '1234$5';

  const [email, setEmail] = useState(defaultUsername);
  const [password, setPassword] = useState(defaultPassword);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === defaultUsername && password === defaultPassword) {
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
        <button onClick={handleRegisterRedirect} className="login-button">Register</button>
      </div>
      
    </div>
  );
}

export default Login;
