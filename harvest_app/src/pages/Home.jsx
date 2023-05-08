import React from 'react';
import NavbarUser from '.././components/NavbarUser';
import NavbarAdmin from '.././components/NavbarAdmin';
import Footer from '.././components/Footer';
import { useAtom } from 'jotai';
import { userAtom } from '../components/SignIn';
import logoHero from "../assets/hero.png"
import { useNavigate } from "react-router-dom";
import './style.css'

function Home() {
  const [user] = useAtom(userAtom);

  const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate('/register');
    };

  return (
    <div>
      {user === 'wiraprathamaalvin@gmail.com' ? (
        <NavbarAdmin />
      ) : (
        <NavbarUser />
      )}
      <div className='container'>
        <div className='text-center'>
          <img src={logoHero} id="logo-hero"/>
          <div id='page-title'>
            Welcome to Harvest!
        </div>
        <b>
          Your digital farming education platform
        </b>
        <div>
        <button className='btn btn-success mt-3' onClick={navigateToRegister}>Start Now!</button>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
