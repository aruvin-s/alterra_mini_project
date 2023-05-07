import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoHarvest from "../assets/logoHarvest.png"
import './Navbar.css'
import { useAtom } from 'jotai';
import { userAtom } from './SignIn';
import { useNavigate } from "react-router-dom";


function NavbarAdmin() {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-5">
            <a className="navbar-brand" id="nav-logo" href="/"><img src={logoHarvest}/>Harvest</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href='/view'>Plant List</a>
                </li>
                <li className="nav-item">
                <a className="nav-link"  href='/add'>Add Plant</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" >My Plant Calendar</a>
                </li>
            </ul>
            {user ? (
              <ul className='navbar-nav d-flex justify-content-end align-items-center'>
                  <li>Welcome, {user}</li>
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

export default NavbarAdmin;
