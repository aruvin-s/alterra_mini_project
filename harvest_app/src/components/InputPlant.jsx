import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { db, storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import './InputPlant.css'


function InputPlant() {
  const [plantImage, setPlantImage] = useState('')
  const [data, setData]= useState({
    plantName:'',
    plantDesc:'',
    plantSeason:'',
    plantSun:'',
    plantWatering:0,
    plantSpacing:0,
    plantDepth:0,
    plantGermination:0,
    plantHarvest:0,
  });

  const navigate = useNavigate();
  const navigateToList = () => {
        navigate('/view');
  };


  useEffect(()=> {
    const uploadImage = () => {
      const plantName = new Date().getTime() + plantImage.name;
      const storageRef = ref(storage, plantName);
      console.log(plantName);
      const uploadTask = uploadBytesResumable(storageRef, plantImage);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          console.log(error)
        },  
        () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setData((prev)=>({...prev, plantImage:downloadURL}))
    });
  }
);
    };
    plantImage && uploadImage();
  }, [plantImage]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const res = await addDoc(collection(db, "plants"), data);
    } catch (err) {
      console.log(err);
    }

    alert("Data successfully submitted");

    setData({
      plantName:'',
      plantDesc:'',
      plantSeason:'',
      plantSun:'',
      plantWatering:'',
      plantSpacing:0,
      plantDepth:0,
      plantGermination:0,
      plantHarvest:0,
      plantImage:''
    });
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center mt-5'>
        <div>
        <h2 className='row d-flex justify-content-center' id="page-title">
            Add New Plant
        </h2>
          <form onSubmit={handleSubmit}>
          <div className='container d-flex justify-content-between'>
          <div className='input-left'>
          <div className='form-group'>
              <label>Plant Name :</label>
              <input
                type='text'
                value={data.plantName}
                onChange={handleChange}
                className='form-control'
                name="plantName"
              />
            </div>
            <div className='form-group'>
              <label>Plant Description :</label>
              <textarea
                type='text'
                value={data.plantDesc}
                onChange={handleChange}
                className='form-control'
                name="plantDesc"
              />
            </div>
            <div className='form-group'>
              <label>Plant Season :</label>
              <select
              className="form-select"
              id="seasonSelection"
              name="plantSeason"
              aria-label="Floating label select example"
              value={data.plantSeason}
              onChange={handleChange}>
              <option selected>Choose the plant planting season</option>
              <option value="Warm">Warm</option>
              <option value="Cool">Cool</option>
            </select>
            </div>
            <div className='form-group'>
              <label>Plant Sun Coverage :</label>
              <select
              className="form-select"
              id="sunSelection"
              name="plantSun"
              aria-label="Floating label select example"
              value={data.plantSun}
              onChange={handleChange}>
              <option selected>Choose the plant sun coverage</option>
              <option value="Full Sun">Full Sun</option>
              <option value="Part Sun">Part Sun</option>
              <option value="Shade">Shade</option>
              </select>
            </div>
            <div className='form-group'>
            <label>Plant Watering :</label>
              <div className='input-group'>
                <input
                  type='number'
                  value={data.plantWatering}
                  onChange={handleChange}
                  className='form-control'
                  aria-describedby="basic-addon2"
                  name="plantWatering"
                />
                <span className="input-group-text" id="basic-addon2">times/week</span>
              </div>
            </div>
            <div className='form-group'>
            <label>Planting Depth :</label>
              <div className='input-group'>
                <input
                  type='number'
                  value={data.plantDepth}
                  onChange={handleChange}
                  className='form-control'
                  aria-describedby="basic-addon2"
                  name="plantDepth"
                />
                <span className="input-group-text" id="basic-addon2">inch</span>
              </div>
            </div>
          </div>
          <div className='input-right'>
          <div className='form-group'>
            <label>Planting Spacing :</label>
              <div className='input-group'>
                <input
                  type='number'
                  value={data.plantSpacing}
                  onChange={handleChange}
                  className='form-control'
                  aria-describedby="basic-addon2"
                  name="plantSpacing"
                />
                <span className="input-group-text" id="basic-addon2">inch</span>
              </div>
            </div>
            <div className='form-group'>
            <label>Plant Germination :</label>
              <div className='input-group'>
                <input
                  type='number'
                  value={data.plantGermination}
                  onChange={handleChange}
                  className='form-control'
                  aria-describedby="basic-addon2"
                  name="plantGermination"
                />
                <span className="input-group-text" id="basic-addon2">weeks</span>
              </div>
            </div>
            <div className='form-group'>
            <label>Plant Sprout to Harvest :</label>
              <div className='input-group'>
                <input
                  type='number'
                  value={data.plantHarvest}
                  onChange={handleChange}
                  className='form-control'
                  aria-describedby="basic-addon2"
                  name="plantHarvest"
                />
                <span className="input-group-text" id="basic-addon2">weeks</span>
              </div>
            </div>
            <div className='form-group'>
              <label>Add Plant Image</label>
              <input
                type='file'
                onChange={(event) => setPlantImage(event.target.files[0])}
                className='form-control'
              />
            </div>
          </div>
          <div className='image-preview ms-3 '>
          <p>Image Preview : </p>
          <img id='plant-image-input' src={data.plantImage}/>
          </div>
          </div>
            <div className="d-grid">
                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                <button className="btn btn-success mt-2" onClick={navigateToList}>View all plant</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputPlant;
