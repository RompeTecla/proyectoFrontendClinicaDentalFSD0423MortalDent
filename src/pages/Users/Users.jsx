import React, { useState, useEffect } from "react";
import { bringUsers } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import { NavBar } from "../../common/Navbar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../../common/Footer/Footer";
import "./Users.css";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const ReduxCredentials = useSelector(userData);

  useEffect(() => {
    if (users.length === 0) {
      bringUsers(ReduxCredentials.credentials.token)
        .then((result) => {
          console.log(result);
          //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
          setUsers(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  return (
    <>
      <NavBar />
      <div className="yourAppointments">Todos los usuarios</div>
      <Container>
        {users.length > 0 ? (
          <Row>
            {users.map((persona) => {
              return (
                <Col key={persona.id} sm="12" md="6" lg="6" xl="6" xxl="4">
                  <div className="containerInt">
                    <div className="contTreatment01">
                      <div>
                        <div className="icon01">
                          <i class="bi bi-person-bounding-box"></i>
                        </div>
                      </div>
                      
                      <div className="treatmentLine">
                        <div className="line01">Username:</div>
                        <div> {persona.username}</div>
                      </div>
                      
                      <div className="treatmentLine">
                        <div className="line01">Nombre:</div>
                        <div> {persona.name}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Apellido:</div>
                        <div> {persona.surname}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Género:</div>
                        <div> {persona.gender}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Email:</div>
                        <div> {persona.email}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Teléfono:</div>
                        <div> {persona.phone}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Dirección:</div>
                        <div> {persona.address}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Codigo postal:</div>
                        <div> {persona.postcode}</div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        ) : (
          <div className="dateConfirm">CARGANDO TODAS LOS USUARIOS...</div>
        )}
      </Container>
      <Footer />
    </>
  );
};
