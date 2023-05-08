import React from 'react'
import CalendarTracker from '../components/CalendarTracker';
import NavbarUser from '../components/NavbarUser';
import NavbarAdmin from '../components/NavbarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '.././components/Footer';
import { useAtom } from 'jotai';
import { userAtom } from '../components/SignIn';

function Tracker() {

    const [user] = useAtom(userAtom);

    return (
        <div >
        <div>
        {user === 'wiraprathamaalvin@gmail.com' ? (
        <NavbarAdmin />
      ) : (
        <NavbarUser />
      )}
        </div>
        <div>
            <CalendarTracker/>
        </div>
            <Footer />
        </div>
    )
}

export default Tracker