import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAtom, atom } from 'jotai';
import logoHarvest from "../assets/PageCover.png"
import './SignIn.css';

export const userAtom = atom(null);

function SignIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [user, setUser] = useAtom(userAtom);

  const navigate = useNavigate();
  const navigateToListAdmin = () => {
        navigate('/view');
  };

  const navigateToListUser = () => {
    navigate('/list');
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        setUser(userCredential.user.email.toLowerCase());
        const user = userCredential.user.email.toLowerCase();
        console.log(user);
        if (user == "wiraprathamaalvin@gmail.com") {
          navigateToListAdmin();
        }
        else {
          navigateToListUser();
        }
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
            Harvest Login
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
                <button type='submit' className='btn btn-primary mt-3'>Login</button>
                {error && <span>Wrong email or password!</span>}
            </div>
            <div className='text-center mt-2'>
                Doesnt have account? <button type="button" className="btn btn-link" onClick={navigateToRegister}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
