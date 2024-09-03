import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Register:', { email, password });
  };
 

  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="input-field"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="input-field"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='login-button' onClick={handleRegister}>Register</button>
    
    </div></div>
  );
}

export default Register;
