import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';
import { Register } from './pages/Register/Register';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App;