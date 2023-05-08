import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import EditModal from "./EditModal"
import './PlantList.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function PlantList() {
    const [data, setData] = useState([]);

    const showToastMessage = () => {
      toast.success('Plant data successfully deleted!', {
          position: toast.POSITION.TOP_RIGHT
      });
  };

    useEffect(()=> {
        const unsub = onSnapshot(
            collection(db, "plants"),
            (snapShot) => {
              let list = [];
              snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
              });
              setData(list);
            },
            (error) => {
              console.log(error);
            }
          );
      
          return () => {
            unsub();
          };

    }, []);

    const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, "plants", id));
          setData(data.filter((item) => item.id !== id));
          showToastMessage();
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className='container'>
        <ToastContainer />
            <table className="table table-bordered" id='admin-table'>
            <thead className='text-center' id='table-head'>
                <tr>
                <th scope="col">Plant Name</th>
                <th scope="col">Plant Season</th>
                <th scope="col">Plant Sun</th>
                <th scope="col">Plant Watering</th>
                <th scope="col">Plant Spacing</th>
                <th scope="col">Plant Depth</th>
                <th scope="col">Plant Germination</th>
                <th scope="col">Plant Harvest</th>
                <th scope="col">Plant Image</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
             <tbody className='text-center'>
                {
                    data.map((data, id) => {
                    return(
                        <tr key={id}>
                        <td>{data.plantName}</td>
                        <td>{data.plantSeason}</td>
                        <td>{data.plantSun}</td>
                        <td>{data.plantWatering}</td>
                        <td>{data.plantSpacing}</td>
                        <td>{data.plantDepth}</td>
                        <td>{data.plantGermination}</td>
                        <td>{data.plantHarvest}</td>
                        <td>{data.plantImage && (
                        <img
                        id='plant-image'
                        src={data.plantImage}
                        alt={data.plantName}
                        />)}
                        </td>
                        <td className='text-center'>
                            <div className='d-flex d-grid gap-2'>
                                <button className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</button>
                                <EditModal
                                data={data}
                                />
                            </div>
                        </td>
                        </tr>
                    )
                    })
                }
            </tbody>
            </table>
        </div>
    );
}

export default PlantList;