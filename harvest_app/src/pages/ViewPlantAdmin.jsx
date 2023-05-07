import React from 'react'
import PlantList from '../components/PlantList';
import NavbarAdmin from '../components/NavbarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './style.css'


function ViewPlantAdmin() {

    const navigate = useNavigate();
    const navigateToAdd = () => {
        navigate('/add');
    };

    return (
        <div>
        <div>
            <NavbarAdmin />
        </div>
        <h2 className='text-center mt-5' id="page-title">
            Plant List
        </h2>
            <div className='container'>
                <button className='btn btn-primary mb-3' onClick={navigateToAdd}> Add New Plant</button>
            </div>
            <PlantList />
        </div>
    )
}

export default ViewPlantAdmin