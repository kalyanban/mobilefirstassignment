import React, { useState } from 'react';

import "./index.css"

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!email || !password) {
        setError('Please fill in all fields');
      } else if (password.length < 6) {
        setError('Password must be at least 6 characters long');
      } else {
        if (email === 'dummy@example.com' && password === 'dummy@123') {
          onLogin(true);
        } else {
          setError('Invalid email or password');
        }
      }
    };
  
    return (
      <div className='login-container'>
        <h1 className='login-heading'>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit} className='form'>
          <div className="form-group">
            <label className='label'>Email</label>
            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-group">
            <label className='label'>Password</label>
            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    );
  };

  export default Login