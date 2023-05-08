import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { doc, setDoc, getDocs } from "firebase/firestore"; 
import { db, storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import moment from 'moment';
import { useAtom } from 'jotai';
import { plantAtom } from './PlantDetails';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function CalendarTracker() {
    const [plantData] = useAtom(plantAtom);
    const [events, setEvents] = useState([]);

    const showToastMessage = () => {
        toast.success('Plant successfully added!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    useEffect(() => {
        if (plantData) {
          const harvestDate = moment().add(plantData.plantHarvest, 'weeks');
          const newEvents = [{
            title: plantData.plantName,
            start: moment().format('YYYY-MM-DDTHH:mm:ss'),
            end: harvestDate.format('YYYY-MM-DDTHH:mm:ss'),
            backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16)
        }];
      
          let wateringDate = moment();
          while (wateringDate.isBefore(harvestDate)) {
            wateringDate = wateringDate.add((7 / plantData.plantWatering), 'days');
            newEvents.push({
              title: plantData.plantName + ' Watering',
              start: wateringDate.format('YYYY-MM-DDTHH:mm:ss'),
              backgroundColor: 'green'
            });
          }
      
          setEvents(newEvents);
        }
      
        const unsub = onSnapshot(
          collection(db, "plantsTracker"),
          (snapShot) => {
            const list = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const events = list.map(item => item.events).flat();
            setEvents(prevEvents => [...prevEvents, ...events]);
          },
          (error) => {
            console.log(error);
          }
        );
      
        return () => {
          unsub();
        };
      }, [plantData]);
      
      const saveData = async (event) => {
        event.preventDefault();
        try {
          const res = await addDoc(collection(db, "plantsTracker"), { events });
          console.log("Events added to database:", res);
          showToastMessage();
        } catch (err) {
          console.log(err);
        }
      }

  return (
    <div className='container mt-5'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
      <ToastContainer />
      <button className='btn btn-primary mt-2 mb-5' onClick={saveData}> Save Calendar</button>
    </div>
  );
}


function renderEventContent(eventInfo) {
    return (
      <div>
            <div style={{ display: 'block' }}>{eventInfo.event.title}</div>
      </div>
    )
  }

export default CalendarTracker;
