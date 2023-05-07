import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './pages/Login';
import ViewPlantAdmin from './pages/ViewPlantAdmin';
import ViewPlantUser from './pages/ViewPlantUser';
import AddPlant from './pages/AddPlant';
import Register from "./pages/Register";
import UserPlantDetails from './pages/UserPlantDetails';
import Home from './pages/Home';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddPlant />} />
          <Route path="/view" element={<ViewPlantAdmin />} />
          <Route path="/list" element={<ViewPlantUser />} />
          <Route path="/register" element={<Register />} />
          <Route exact path='/plants/:id' element={<UserPlantDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
