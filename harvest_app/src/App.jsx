import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './pages/Login';
import ViewPlant from './pages/ViewPlant';
import AddPlant from './pages/AddPlant';
import Register from "./pages/Register";

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/add" element={<AddPlant />} />
          <Route path="/view" element={<ViewPlant />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
