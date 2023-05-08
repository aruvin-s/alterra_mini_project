import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoHarvest from "../assets/PageCover.png"
import './Footer.css'


function Footer() {

  return (
        <div id='footer'>
            <div className='mt-5 text-center'>
                <div className='align-items-center d-flex justify-content-center' id="footer-up">
                    Mini Project Presentation
                    © Alterra Academy
                </div>
                <div className='align-items-center' id="footer-bottom">
                    <img src={logoHarvest} id='logo-footer' />
                    <p id='made-by'>Harvest</p>
                </div>
            </div>
        </div>
  );
}

export default Footer;
