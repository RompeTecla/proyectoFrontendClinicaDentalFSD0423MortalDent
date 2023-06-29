import React from "react";
import "./Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CardComponent } from "../../common/Card/Card";
import { NavBar } from "../../common/Navbar/Navbar";
import { Footer } from "../../common/Footer/Footer";

import imgClientSatisfaction01 from "../../assets/img/satisfaccion02.jpg";
import imgClientSatisfaction02 from "../../assets/img/satisfaccion01.jpg";
import implantImage from "../../assets/img/implantologiadef.jpg";
import dentalProtesis from "../../assets/img/protesis-dentales.jpg";
import orthodontic from "../../assets/img/ortodoncia.jpg";
import odontology from "../../assets/img/odontologia-general.jpg";
import smileDesign from "../../assets/img/disenosonrisa.jpg";

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
            <Button className="adButton">¿Quieres conocernos?</Button>
          </div>
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
        <div className="ourServices">
          <div className="ourPrestige">¿Como podemos ayudarte?</div>
          <div className="ourTrust">Nuestros tratamientos:</div>
        </div>
        <Container>
          <Row className="flex-row d-flex ">
            <Col md={6} lg={6} xl={4} xxl={4} className="cardServices">
              <CardComponent
                image={implantImage}
                showButton={true}
                title="Implantología"
                text="Utilizamos implantes europeos de primera calidad, que tienen una tasa de éxito del 99% y que no se distinguen del resto de tus dientes."
              />
            </Col>
            <Col md={6} lg={6} xl={4} xxl={4} className="cardServices">
              <CardComponent
                image={dentalProtesis}
                showButton={true}
                title="Prótesis dentales"
                text="Colocamos prótesis que son muy naturales, no se notan, duran hasta 15 años y te permiten volver a sonreír y comer con normalidad."
              />
            </Col>
            <Col md={6} lg={6} xl={4} xxl={4} className="cardServices">
              <CardComponent
                image={orthodontic}
                showButton={true}
                title="Ortodoncia"
                text="Realizamos tratamientos de ortodoncia tanto con alineadores transparentes como con brackets (metálicos y de zafiro)."
              />
            </Col>
          </Row>

          <Row>
            <Col
              md={6}
              lg={6}
              xl={4}
              xxl={4}
              className="cardServices lastRowServices"
            >
              <CardComponent
                image={odontology}
                showButton={true}
                title="Odontología General"
                text="Eliminamos las caries y las enfermedades de las encías (periodontitis o piorrea): empastes, endodoncias, curetajes..."
              />
            </Col>
            <Col md={6} lg={6} xl={4} xxl={4} className="cardServices">
              <CardComponent
                image={smileDesign}
                showButton={true}
                title="Estética dental"
                text="Llevamos a cabo tratamientos para mejorar y rejuvenecer la apariencia de la sonrisa: blanqueamiento y carillas. Varios descuentos disponibles."
              />
            </Col>
            <Col md={6} lg={6} xl={4} xxl={4} className="cardServices">
              <CardComponent
                image={implantImage}
                showButton={true}
                title="Elevaciones maxilares"
                text="Utilizamos implantes europeos de primera calidad, que tienen una tasa de éxito del 99% y que no se distinguen del resto de tus dientes."
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};
