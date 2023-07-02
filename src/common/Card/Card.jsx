import React from "react";
import { Button } from 'react-bootstrap';
import './Card.css'

export const CardComponent = ({ image, showButton, title, text }) => {
  return (
    <div className='containerServices'>
        <div className="containerAllServices">
            <img className='imgLogoServices' src={image} alt=""/>
            <div className='titleServices'>{title}</div>
            <p className='textInfoServices'>{text}</p>
            {showButton && <Button className='servicesBtn'>Información <i className="bi bi-chevron-right"></i></Button>}
        </div>
    </div>
  );
}