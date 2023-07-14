import React from "react"; 
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import { useNavigate } from "react-router-dom";
import { appointmentsAll } from "../../services/apiCalls";
import { NavBar } from "../../common/Navbar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../../common/Footer/Footer";
import Moment from "moment";
import "../Appointments/appointments.css";

export const Appointment = () => {
  const [appointment, setAppointment] = useState([]);

  const ReduxCredentials = useSelector(userData);
  console.log(ReduxCredentials);

  const navigate = useNavigate();

  useEffect(() => {
    if (appointment.length === 0) {
      appointmentsAll(ReduxCredentials.credentials.token)
        .then((result) => {
          console.log(result);
          //Despues de traer los usuarios de la base de datos, los guardamos en el hook
          setAppointment(result.data.citasActivas);
        })
        .catch((error) => console.log(error));
    }
  }, [appointment]);

  return (
    <>
      <NavBar />
      <div className="yourAppointments">Todas las citas</div>
      <Container className="AllContainerBootstrap">
        {appointment.length > 0 ? (
          <Row>
            {appointment.map((tag) => {
              return (
                <Col key={tag.id} sm="12" md="6" lg="6" xl="6" xxl="4">
                  <div className="containerInt">
                    <div className="contTreatment01">
                      <div>
                        <div className="iconAppointment">
                          <i class="bi bi-journal-text iconLogin"></i>
                        </div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Hora:</div>
                        <div>
                          {Moment(tag.date).format("DD/MM/YYYY HH:mm:ss")}
                        </div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Estado:</div>
                        <div> {tag.status}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">NºTratamiento:</div>
                        <div> {tag.treatment_id}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">NºPaciente:</div>
                        <div> {tag.pacient_id}</div>
                      </div>
                      <div className="allButtons">
                        <div
                          onClick={() => navigate("/appointments/dentist")}
                          className="deleteDesign delete01"
                        >
                          Mis citas
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        ) : (
          <div className="dateConfirm">CARGANDO...</div>
        )}
      </Container>
      <Footer />
    </>
  );
};
