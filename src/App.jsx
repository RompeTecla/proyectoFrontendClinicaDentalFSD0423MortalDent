import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Treatment } from './pages/Treatments/Treatments';
import { Users } from './pages/Users/Users';
import { Appointment } from './pages/Appointments/Appointments';
import { AppointmentsAsClient } from "./pages/AppointmentUser/AppointmentUser";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/treatments' element={<Treatment/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/appointments" element={<Appointment/>}/>
        <Route path="/appointments/book" element={<AppointmentsAsClient/>}/>
      </Routes>
    </>
  )
}

export default App;