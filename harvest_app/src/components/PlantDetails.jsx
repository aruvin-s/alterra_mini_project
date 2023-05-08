import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import "./PlantDetails.css"
import iconPlantName from "../assets/plantNameIcon.png"
import iconPlantSeason from "../assets/plantSeasonIcon.png"
import iconPlantSun from "../assets/plantSunIcon.png"
import iconPlantWater from "../assets/plantWaterIcon.png"
import iconPlantSpacing from "../assets/plantSpacingIcon.png"
import iconPlantDepth from "../assets/plantDepthIcon.png"
import iconPlantGerm from "../assets/plantGermIcon.png"
import iconPlantHarvest from "../assets/plantHarvestIcon.png"
import { useAtom, atom } from 'jotai';
import { useNavigate } from "react-router-dom";

export const plantAtom = atom(null);

function PlantDetails() {
  const [plant, setPlant] = useState(null);
  const { id } = useParams();
  const [plantDataAtom, setPlantDataAtom] = useAtom(plantAtom);

  const navigate = useNavigate();
  const navigateToTracker = () => {
        navigate('/calendars');
  };
  
  useEffect(() => {
    async function fetchPlant() {
      const docRef = doc(db, 'plants', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPlant(docSnap.data());
      } else {
        console.log('No such document!');
      }
    }

    fetchPlant();
  }, [id]);

  const handleAdd = () => {
    setPlantDataAtom(plant);
    navigateToTracker();
  }

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mt-4'>
    <h2 className='text-center' id='detail-title'>{plant.plantName}</h2>
    <div className='d-flex mt-4'>
      <div id='hero-left'>
          <img id='details-image' src={plant.plantImage} alt='Plant'></img>
        </div>
        <div id='hero-right'>
        <div className='d-flex ms-4'>
          <div>
          <div className='d-flex'>
            <img className="plant-icon" src={iconPlantName}/>
            <div className='ms-2 align'>
              <b>Plant Name</b>
              <p>{plant.plantName}</p>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <img className="plant-icon" src={iconPlantSeason}/>
            <div className='ms-2 align'>
              <b>Plant Season</b>
              <p>{plant.plantSeason}</p>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <img className="plant-icon" src={iconPlantSun}/>
            <div className='ms-2 align'>
              <b>Plant Sun Coverage</b>
              <p>{plant.plantSun}</p>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <img className="plant-icon" src={iconPlantWater}/>
            <div className='ms-2 align'>
              <b>Plant Watering</b>
              <p>{plant.plantWatering} times/weeks</p>
            </div>
          </div>
          </div>
          <div className='ms-4'>
          <div className='d-flex'>
            <img className="plant-icon" src={iconPlantSpacing}/>
            <div className='ms-2 align'>
              <b>Plant Spacing</b>
              <p>{plant.plantSpacing}/square</p>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <img className="plant-icon" src={iconPlantDepth}/>
            <div className='ms-2 align'>
              <b>Planting Depth</b>
              <p>{plant.plantDepth} inch</p>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <img className="plant-icon" src={iconPlantGerm}/>
            <div className='ms-2 align'>
              <b>Plant Germination</b>
              <p>{plant.plantGermination} weeks</p>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <img className="plant-icon" src={iconPlantHarvest}/>
            <div className='ms-2 align'>
              <b>Plant Harvest Time</b>
              <p>{plant.plantHarvest} weeks</p>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
    <button className='btn btn-success mt-4' onClick={handleAdd}>Add this plant to calendar</button>
      <div className='mt-4'>
        <h2 id='sub-title'>How to Plant</h2>
        <p>{plant.plantDesc}</p>
      </div>
    </div>
  );
}

export default PlantDetails;
