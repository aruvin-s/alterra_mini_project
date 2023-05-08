import React from 'react'
import PlantDetails from '../components/PlantDetails';
import NavbarUser from '../components/NavbarUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '.././components/Footer';

function ViewPlant() {

    return (
        <div >
        <div>
            <NavbarUser/>
        </div>
        <div>
             <PlantDetails/>
        </div>
            <Footer />
        </div>
    )
}

export default ViewPlant