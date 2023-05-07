import React from 'react'
import PlantDetails from '../components/PlantDetails';
import NavbarUser from '../components/NavbarUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewPlant() {

    return (
        <div >
        <div>
        <NavbarUser/>
        </div>
                <PlantDetails/>
        </div>
    )
}

export default ViewPlant