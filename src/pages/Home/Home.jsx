import React from "react";
import "./Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CardComponent } from "../../common/Card/Card";
import { NavBar } from "../../common/Navbar/NavBar";
import { Footer } from "../../common/Footer/Footer";

import imgClientSatisfaction01 from "../../assets/img/satisfaccion02.jpg";
import imgClientSatisfaction02 from "../../assets/img/satisfaccion01.jpg";
import implantImage from "../../assets/img/implantologiadef.png";
import dentalProtesis from "../../assets/img/protesis-dentales.png";
import orthodontic from "../../assets/img/ortodoncia.png";
import odontology from "../../assets/img/odontologia-general.png";
import smileDesign from "../../assets/img/disenosonrisa.png";
import maxiloElevation from "../../assets/img/elevaciones-maxilares.png";

export const Home = () => {
  return (
    <>
      <NavBar className="navbarHome" />
      <div className="allHome">
        <div className="offerContainerHome">
          <Container>
            <Row>
              <Col
                xs={12}
                md={12}
                lg={6}
                xl={6}
                xxl={6}
                className="offerColumn"
              >
                <div className="offer">
                  <p className="until">Hasta</p>
                  <p className="offerPrice">700€</p>
                  <p className="ofDiscount">de descuentos</p>
                  <p className="ortpImplantOffer">
                    en tu ortodoncia si eres donante de piezas dentales!
                  </p>
                  <div className="dateButton">
                    <Button className="dateFree">Pide tu cita gratis</Button>
                    <Button className="moreInfo">Información</Button>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={6}
                xxl={6}
                className="offerColumn"
              >
                <div className="picturePeople">
                  <img
                    className="clientSatisfaction01"
                    src={imgClientSatisfaction01}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ourHistory">
          <p className="ourPrestige">Nuestro datos nos respaldan</p>
          <p className="ourTrust">Somos tu dentista de confianza</p>
          <div className="allOurData">
            <div className="dataCol">
              <p className="dataNum">Mas de 2</p>
              <p className="dataInfo">meses de experiencia</p>
            </div>
            <div className="dataCol">
              <p className="dataNum">Mas de 5</p>
              <p className="dataInfo">tratamientos dentales</p>
            </div>
            <div className="dataCol">
              <p className="dataNum">+1500</p>
              <p className="dataInfo">euros en descuentos disponibles</p>
            </div>
            <div className="dataCol">
              <p className="dataNum">Mas de 1 y menos de 1000</p>
              <p className="dataInfo">pacientes tratados en nuestra clínica</p>
            </div>
          </div>
        </div>
        <div className="aboutClinicHomeContainer">
          <div className="clinicHomeImgContainer">
            <div>
              <img className="clientSatisfaction02" src={imgClientSatisfaction02} alt="" />
            </div>
          </div>
          <div className="textClinicAdContainer">
            <p className="clinicForYou">Tu dentista de confianza</p>
            <p className="trustedClinic">
              Mortaldent es una clínica dental inestable y poco consolidada que
              cuenta con un centro nunca cerca de ti para ayudarte.
            </p>
            <Button className="adBtn">¿Quieres conocernos?</Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
