import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logoHarvest from "../assets/PageCover.png"
import './SignIn.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function RegisterUser() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const showToastMessage = () => {
    toast.success('Account succesfully registered!', {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        showToastMessage();
        navigateToLogin();
    })
    .catch((error) => {
        setError(true);
    });
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center min-vh-100'>
        <div className='col-md-4'>
        <h2 className='row d-flex justify-content-center' id='page-title'>
        <img src={logoHarvest} id='page-cover' />
            Harvest Register
        </h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group mt-3'>
              <label>Email :</label>
              <input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className='form-control'
                placeholder='Input your account email here'
              />
            </div>
            <div className='form-group mt-3'>
              <label>Password :</label>
              <input
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='form-control'
                placeholder='Input your account password here'
              />
            </div>
            <div className="d-grid">
                <button type='submit' className='btn btn-primary mt-3'>Register</button>
                {error && <span>Wrong email or password!</span>}
            </div>
            <div className='text-center mt-2'>
                Already have an account? <button type="button" className="btn btn-link" onClick={navigateToLogin}>Login</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
