import { Footer } from "../../common/Footer/Footer"
import { NavBar } from "../../common/Navbar/NavBar"
import { Col, Container, Row } from 'react-bootstrap';
import React from "react";
import CardComponent from "../../common/Card/Card";
import './Treatments.css'
import implantImage from "../../assets/img/implantologiadef.png";
import dentalProtesis from "../../assets/img/protesis-dentales.png";
import orthodontic from "../../assets/img/ortodoncia.png";
import smileDesign from "../../assets/img/disenosonrisa.png";

export const Treatment = () => {
    return (
        <>
            <NavBar/>
            <Container>
                <Row className='flex-row d-flex allCards '>
                    <Col sm={12} md={12} lg={6} xl={6} xxl={4} className="cardContainer">
                        <CardComponent 
                            image={smileDesign}
                            showButton={true} 
                            title= "Limpieza dental"
                            text="Limpieza profunda de las piezas dentales y las encías."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="cardContainer" >
                        <CardComponent 
                            image={smileDesign}
                            showButton={true} 
                            title= "Blanqueamiento dental"
                            text="Limpieza dental para posteriormente aplicar tratamientos blanqueadores"
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="cardContainer">
                        <CardComponent 
                            image={dentalProtesis}
                            showButton={true} 
                            title= "Trat. contra periodontitis"
                            text="Limpieza dental y eliminación de bolsas periodentales en caso de haberlas-"
                        />
                    </Col>        
                </Row>
            </Container>
            <Container>
                <Row className='flex-row d-flex allCards '>
                    <Col md={12} lg={12} xl={4} xxl={4} className="cardContainer">
                        <CardComponent 
                            image={dentalProtesis}
                            showButton={true} 
                            title= "No mas caries"
                            text="Eliminamos tus caries, acabamos con el dolor y te ayudamos a prevenirlas."
                        />
                    </Col>        
                    <Col md={6} lg={6} xl={4} xxl={4} className="cardContainer">
                        <CardComponent 
                            image={implantImage}
                            showButton={true} 
                            title= "Implantologia"
                            text="Suplimos la falta de piezas dentales con técnicas innovadoras de colocación de inplantes."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="cardContainer" >
                        <CardComponent 
                            image={implantImage}
                            showButton={true} 
                            title= "Protesis dental"
                            text="Diseñamos tu dentadura desde cero. Implantamos toda tu boca con los mejores materiales del mercado y las técnicas menos dolorosas y efectivas."
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='flex-row d-flex allCards '>
                    <Col md={6} lg={6} xl={4} xxl={4} className="cardContainer">
                        <CardComponent 
                            image={orthodontic}
                            showButton={true} 
                            title= "Ortodoncia"
                            text="Contamos con el diseño mas revolucionario de brackets a medida."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="cardContainer" >
                        <CardComponent 
                            image={orthodontic}
                            showButton={true} 
                            title= "Ortodoncia invisible"
                            text="Si quieres corregir tu sonrisa sin que nadie se de cuenta, nuestras félulas invisibles te ayudarán."
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="cardContainer">
                        <CardComponent 
                            image={orthodontic}
                            showButton={true} 
                            title= "Ortodoncia infantil"
                            text="La ortodoncia infantil está dirigida a los niños que desarrollan en su infancia temprana cualquier tipo de afección respiratoria..."
                        />
                    </Col>        
                </Row>
            </Container>
            <Footer/>
        </>
    )
}