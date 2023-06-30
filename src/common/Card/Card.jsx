import React from "react";
import { Button } from 'react-bootstrap';
import './Card.css'

export const CardComponent = ({ image, showButton, title, text }) => {
  return (
    <div className='cont-treatment-1'>
        <div className="cont-all">
            <img className='imgLogo' src={image} alt=""/>
            <div className='title-treatment-1'>{title}</div>
            <p className='text-treatment-1'>{text}</p>
            {showButton && <Button className='appointment-btn'>Información <i className="bi bi-chevron-right"></i></Button>}
        </div>
    </div>
  );
}