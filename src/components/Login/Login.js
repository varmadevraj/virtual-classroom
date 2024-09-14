import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.data.success) {
        // Redirect to home or other page
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form className="forms" onSubmit={handleSubmit}>
        <div className='label1'>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='label1'>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="buttons" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
