import React from 'react';
import './Navigator.css';
import '../Navbar/NavBar.css'

import { useNavigate } from 'react-router-dom';
 
export const Navigator = ({ruta, destino}) => {

    //Instancio useNavigate dentro de la constante navigate para poder desplazarme con router-dom

    const navigate = useNavigate();

     return (
         <div className='navMenu' onClick={()=> navigate(destino)}>
            {ruta}
         </div>
     )
}