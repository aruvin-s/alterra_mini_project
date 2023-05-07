import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './CardPlant.css'

function CardPlant() {
  const [data, setData] = useState([]);

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

  const rows = data.reduce((acc, curr) => {
    if (acc.length === 0) {
      return [[curr]];
    } else if (acc[acc.length - 1].length < 4) {
      acc[acc.length - 1].push(curr);
      return acc;
    } else {
      return [...acc, [curr]];
    }
  }, []);

  return (
    <div className='container'>
      {rows.map((row, rowIndex) => (
        <div className='card-deck d-flex justify-content-center' key={rowIndex}>
          {row.map((plant, index) => (
            <div className='card text-center' key={index}>
              <img className="card-img-top" id='card-image' src={plant.plantImage} alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">{plant.plantName}</h5>
                <Link to={`/plants/${plant.id}`} className="btn btn-success">View</Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CardPlant;
