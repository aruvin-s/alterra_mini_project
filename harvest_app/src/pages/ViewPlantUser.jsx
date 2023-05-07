import React from 'react'
import CardPlant from '../components/CardPlant';
import NavbarUser from '../components/NavbarUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function ViewPlant() {

    return (
        <div >
        <div>
        <NavbarUser/>
        </div>
            <h2 className='text-center mt-5' id="page-title">
                Plant List
            </h2>
            <p className='text-center' id='page-subtitle'>
                Pick your plant to start farming
            </p>
                <CardPlant/>
        </div>
    )
}

export default ViewPlant