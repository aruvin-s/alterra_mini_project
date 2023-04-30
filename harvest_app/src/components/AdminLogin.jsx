import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLogin() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
  };

  return (
    <div className='container-fluid'>
    <h2 className='row justify-content-center'>
        Harvest Login
    </h2>
      <div className='row d-flex justify-content-center mx-auto'>
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
              <label>Password : </label>
              <input
                type='text'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary mt-2'>Submit</button>
          </form>
      </div>
    </div>
  );
}

export default AdminLogin;
