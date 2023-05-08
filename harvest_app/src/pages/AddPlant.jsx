import React from 'react'
import InputPlant from '.././components/InputPlant';
import NavbarAdmin from '../components/NavbarAdmin';
import Footer from '.././components/Footer';

function AddPlant() {
    return (
        <div>
        <div>
            <NavbarAdmin />
        </div>
        <div>
            <InputPlant />
        </div>
            <Footer/>  
        </div>
    )
}

export default AddPlant