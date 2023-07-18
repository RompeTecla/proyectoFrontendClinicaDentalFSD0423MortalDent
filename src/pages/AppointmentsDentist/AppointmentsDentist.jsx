import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { bringAllAppointmentsAsDoctor } from "../../services/apiCalls";
import { userData } from "../../services/userSlice";
import { NavBar } from "../../common/Navbar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../../common/Footer/Footer";
import Moment from "moment";
import "../AppointmentsDentist/AppointmentsDentist.css"

export const AppointmentsAsDentist = () => {
  const [allAppointments, setAllAppointments] = useState([]);

  const credentialsRdx = useSelector(userData);

  useEffect(() => {
    if (allAppointments.length === 0) {
      bringAllAppointmentsAsDoctor(credentialsRdx.credentials.token)
        .then((result) => {
          console.log(result.data);

          setAllAppointments(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [allAppointments]);

  return (
    <>
      <NavBar />
      <div className="allContainer">
      <div className="yourAppointments">Todas mis citas</div>
      <Container>
        {allAppointments.length > 0 ? (
          <Row>
            {allAppointments.map((appointment) => {
              return (
                <Col key={appointment.id} className="col"sm="12" md="12" lg="6" xl="6" xxl="4">
                  <div className="containerInt">
                    <div className="contTreatment01">
                      <div>
                        <div className="iconAppointment">
                          <i class="bi bi-journal-text"></i>
                        </div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Hora:</div>
                        <div>
                          {Moment(appointment.date).format(
                            "DD/MM/YYYY HH:mm:ss"
                          )}
                        </div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Estado:</div>
                        <div>{appointment.status}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line02">Observaciones: </div>
                        <div>{appointment.observations}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Tratamiento:</div>{" "}
                        <div>{appointment.Treatment.name}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Duración:</div>{" "}
                        <div>{appointment.Treatment.duration}</div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        ) : (
          <div className="dateConfirm">CARGANDO TUS CITAS...</div>
        )}
      </Container>
      </div>
      <Footer />
    </>
  );
};
