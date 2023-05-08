import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import logoHarvest from "../assets/logoHarvest.png"
import { useAtom } from 'jotai';
import { userAtom } from './SignIn';
import { useNavigate } from "react-router-dom";

function NavbarUser() {
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUser(null);
    navigateToHome();
  };
  
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-5">
            <a className="navbar-brand" id="nav-logo" href="/"> <img src={logoHarvest}/>Harvest</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href='/list'>Plant</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href='/calendars'>My Plant Calendar</a>
                </li>
            </ul>
            {user ? (
              <ul className='navbar-nav d-flex justify-content-end align-items-center'>
                  <li>Welcome, {user}</li>
                    <button type='button' className='btn btn-danger ms-2' onClick={handleLogout}>Log Out</button>
                  </ul>
                ) : (
                  <ul className='navbar-nav d-flex justify-content-end align-items-center'>
                    <li className="nav-item">
                    <a className="nav-link" href='/login'>Login</a>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-success btn-sm" onClick={navigateToRegister}>Sign Up</button>
                    </li>
                  </ul>
                )}
            </div>
        </div>
        </nav>
  );
}

export default NavbarUser;
