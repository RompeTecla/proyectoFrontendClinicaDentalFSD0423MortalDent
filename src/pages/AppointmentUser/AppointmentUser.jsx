import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  bringAppointments,
  deleteMyAppointment,
} from "../../services/apiCalls";
import {
  addChoosenAppointment,
  appointmentData,
} from "../../services/appointmentSlice";
import { userData } from "../../services/userSlice";
import "./AppointmentUser.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavBar } from "../../common/Navbar/NavBar";
import { Footer } from "../../common/Footer/Footer";
import Moment from "moment";

export const AppointmentsAsClient = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const credentialsRdx = useSelector(userData);
  console.log(credentialsRdx);
  const appoimentSelectedRdx = useSelector(appointmentData);

  let params = appoimentSelectedRdx.choosenAppointment.id;
  console.log(params);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (appointments.length === 0) {
      setTimeout(() => {
        bringAppointments(credentialsRdx.credentials.token)
          .then((result) => {
            setLoading(false);
            console.log(result.data);
            if (result.data.length === 0) {
              return;
            }
            setAppointments(result.data);
          })
          .catch((error) => console.log(error));
      }, 500);
    }
  }, [appointments]);

  const appointmentSelected = (appointment) => {
    dispatch(addChoosenAppointment({ choosenAppointment: appointment }));
    console.log(addChoosenAppointment({ choosenAppointment: appointment }));
    setTimeout(() => {
      navigate("/modify/appointment");
    }, 1000);
  };
  const deleteApp = async (appointment) => {
    await deleteMyAppointment(appointment.id, credentialsRdx.credentials.token);
    setAppointments((prevAppointments) =>
      prevAppointments.filter((a) => a.id !== appointment.id)
    );
  };

  if (loading) {
    return <div className="dateConfirm">Cargando citas...</div>;
  } else if (appointments.length > 0) {
    return (
      <>
        <NavBar />
        <div
          onClick={() => navigate("/createAppointments")}
          className="deleteDesign btnDate"
        >
          Pedir cita nueva
        </div>
        <div className="yourAppointments">Tus citas</div>
        <Container>
          <Row className="allAppointment">
            {appointments.map((appointment) => {
              return (
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={6}
                  xxl={4}
                  key={appointment.id}
                >
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
                        <div> {appointment.status}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Coste:</div>
                        <div> {appointment.Treatment.price}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Tratamiento:</div>{" "}
                        <div> {appointment.Treatment.name}</div>
                      </div>
                      <div className="treatmentLine">
                        <div className="line01">Duración:</div>{" "}
                        <div> {appointment.Treatment.duration}</div>
                      </div>
                      <div className="allButtons">
                        <div
                          onClick={() => deleteApp(appointment)}
                          className="deleteDesign"
                        >
                          Borrar
                        </div>
                        <div
                          onClick={() => appointmentSelected(appointment)}
                          className="deleteDesign"
                        >
                          Modificar
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Footer />
      </>
    );
  } else {
    return (
      <div>
        <div className="dateConfirm">No hay citas</div>
      </div>
    );
  }
};
