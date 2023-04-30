import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLogin() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Password: ${password}`);
    console.log(`Email: ${email}`);
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center min-vh-100'>
        <div className='col-md-4'>
        <h2 className='row d-flex justify-content-center'>
            Harvest Login
        </h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Email:</label>
              <input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='text'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='form-control'
              />
            </div>
            <div className="d-grid">
                <button type='submit' className='btn btn-primary mt-3'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
