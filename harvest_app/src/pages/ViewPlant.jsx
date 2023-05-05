import React from 'react'
import PlantList from '.././components/PlantList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


function ViewPlant() {

    const navigate = useNavigate();
    const navigateToAdd = () => {
        navigate('/add');
    };

    return (
        <div>
        <h2 className='text-center mt-5'>
            Plant List
        </h2>
            <div className='container'>
                <button className='btn btn-primary mb-3' onClick={navigateToAdd}> Add New Plant</button>
            </div>
            <PlantList />
        </div>
    )
}

export default ViewPlant