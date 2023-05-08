import React, { useEffect, useState } from 'react';
import { db, storage } from "../firebase"
import { collection, getDocs, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [update, setUpdate]= useState({
        plantName: props.data.plantName,
        plantDesc:props.data.plantDesc,
        plantSeason: props.data.plantSeason,
        plantSun: props.data.plantSun,
        plantWatering:props.data.plantWatering,
        plantSpacing: props.data.plantSpacing,
        plantDepth: props.data.plantDepth,
        plantGermination: props.data.plantGermination,
        plantHarvest: props.data.plantHarvest,
        //plantImage: props.data.plantImage,
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdate((prevUpdate) => ({ ...prevUpdate, [name]: value }));
    };

    const handleupdate = async (id) => {
        const plantRef = doc(db, "plants", id);
        try {
            await updateDoc(plantRef, update);
        } catch (err) {
          console.log(err);
        }
      };
    
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Edit Plant </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                <div className='form-group'>
                <label>Plant Name :</label>
                <input
                    type='text'
                    className='form-control'
                    name="plantName"
                    value={update.plantName}
                    onChange={handleChange}
                />
                </div>
                <div className='form-group'>
                <label>Plant Description :</label>
                <textarea
                    type='text'
                    className='form-control'
                    name="plantDesc"
                    value={update.plantDesc}
                    onChange={handleChange}
                />
                </div>
                <div className='form-group'>
                <label>Plant Season :</label>
                <select
                className="form-select"
                id="seasonSelection"
                name="plantSeason"
                aria-label="Floating label select example"
                value={update.plantSeason}
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
                value={update.plantSun}
                onChange={handleChange}
                aria-label="Floating label select example">
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
                    className='form-control'
                    aria-describedby="basic-addon2"
                    name="plantWatering"
                    value={update.plantWatering}
                    onChange={handleChange}
                    />
                    <span className="input-group-text" id="basic-addon2">times/week</span>
                </div>
                </div>
                <div className='form-group'>
                <label>Planting Depth :</label>
                <div className='input-group'>
                    <input
                    type='number'
                    className='form-control'
                    aria-describedby="basic-addon2"
                    name="plantDepth"
                    value={update.plantDepth}
                    onChange={handleChange}
                    />
                    <span className="input-group-text" id="basic-addon2">inch</span>
                </div>
                </div>
                <div className='form-group'>
                <label>Planting Spacing :</label>
                <div className='input-group'>
                    <input
                    type='number'
                    className='form-control'
                    aria-describedby="basic-addon2"
                    name="plantSpacing"
                    value={update.plantSpacing}
                    onChange={handleChange}
                    />
                    <span className="input-group-text" id="basic-addon2">inch</span>
                </div>
                </div>
                <div className='form-group'>
                <label>Plant Germination :</label>
                <div className='input-group'>
                    <input
                    type='text'
                    className='form-control'
                    aria-describedby="basic-addon2"
                    name="plantGermination"
                    value={update.plantGermination}
                    onChange={handleChange}
                    />
                    <span className="input-group-text" id="basic-addon2">weeks</span>
                </div>
                </div>
                <div className='form-group'>
                <label>Plant Sprout to Harvest :</label>
                <div className='input-group'>
                    <input
                    type='text'
                    className='form-control'
                    aria-describedby="basic-addon2"
                    name="plantHarvest"
                    value={update.plantHarvest}
                    onChange={handleChange}
                    />
                    <span className="input-group-text" id="basic-addon2">weeks</span>
                </div>
                </div>
                <div className='form-group'>
                <label>Add Plant Image</label>
                <input
                    type='file'
                    onChange={(event) => setPlantImage(event.target.files[0])}
                    value={update.plantImage}
                    className='form-control'
                />
                </div>
                </form>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                <Button className='col-lg-4' variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button className='col-lg-4' variant="primary" onClick={()=>handleupdate(props.data.id)}>Submit</Button>
                </Modal.Footer>
            </Modal>
         </div>
    );
}

export default EditModal;