import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Footer } from "../../common/Footer/Footer";
import { NavBar } from "../../common/Navbar/NavBar";
import { useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { validate } from "../../services/useful";
// import { registerUser } from "../../services/apiCalls";

export const Register = () => {
  const navigate = useNavigate();

  ////////////////////////////////////////////////// H O O K S //////////////////////////////////////////////////

  // Comprobacion inicial de Hooks con campo vacío.
  const [credentials, setCredentials] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    username: "",
    phone: "",
    address: "",
    gender: "",
    postcode: "",
  });

  const [valiCredentials, setValiCredentials] = useState({
    nameVali: false,
    surnameVali: false,
    emailVali: false,
    passwordVali: false,
    usernameVali: false,
    addressVali: false,
    phoneVali: false,
    genderVali: false,
    postcodeVali: false,
  });

  // Con este HOOK se recogen los errores que inicialmente se mantiene en string vacío.
  const [credentialsError, setCredentialsError] = useState({
    nameError: "",
    passwordError: "",
    surnameError: "",
    emailError: "",
    usernameError: "",
    addressError: "",
    phoneError: "",
    genderError: "",
    postcodeError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  /////////////////////////////////////////// H A N D L E R S /////////////////////////////////////////////

  // inputHandler se maneja en el input en el que introducimos cada credencial del usuario, y el diferencia cada una de las credentials
  const inputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      // Con el ...spread... se hace una copia del estado inicial del componente para no tener que mutar el original,
      // a continuacion se asigna el valor del input que esté escribiendose a la parte correspondiente del Hook.
    }));
  };

  ///////////////////////////////////// U S E - E F F E C T /////////////////////////////////////////

  // Funciones de ciclo de vida del componente.
  // Ejecucion de los useEffect
  const [welcome, setWelcome] = useState("");
  //Este useEffect siempre se ejecuta cuando se actualice cualquier hook.....
  useEffect(() => {
    //Recorremos el primer for in para ver si hay errores en las credenciales.
    for (let error in credentialsError) {
      if (credentialsError[error] !== "") {
        setRegisterAct(false);
        return;
      }
    }

    // Con otro "for in" comprobamos que no falte ningun campo por rellenar.
    for (let empty in credentials) {
      if (credentials[empty] === "") {
        setRegisterAct(false);
        return;
      }
    }

    // Y con este último "for in" recorrerá el HOOK "valiCredentials" que revisa si todas los campos están rellenos y validados.
    for (let validated in valiCredentials) {
      if (valiCredentials[validated] === false) {
        setRegisterAct(false);
        return;
      }
    }
    // Si supera los "for in" y no hay errores, llegará aquí. "setSegisterAct" será "true".
    setRegisterAct(true);
  });

  ///////////////////////////////////////// F U N C I O N E S ////////////////////////////////////////
  //Funcion de validacion

  const checkError = (e) => {
    let error = "";

    let checked = validate(e.target.name, e.target.value, e.target.required);

    error = checked.message;

    //Aqui seteamos el hook de las validaciones
    console.log("Validacion de credentials: ", valiCredentials);

    setValiCredentials((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    //Aqui seteamos el hook de los errores

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  //   const userRegister = () => {
  //     registerUser(credentials);
  //     console.log("Credenciales: " + credentials);

  //     setWelcome(`Bienvenida/o y grácias por confiar en nuestros profesionales.`);

  //     //Redirección a Home

  //     setTimeout(() => {
  //       navigate("/home");
  //     }, 2500);
  //   };

  return (
    <>
      <NavBar />
      <div className="allContainer">
        <div className="allContainerRegister">
          <div className="containerIcon">
            <div className="bi bi-person-workspace iconLogin"></div>
          </div>
          {welcome !== "" ? (
            <div className="date-confirm">{welcome}</div>
          ) : (
            <Container className="containerRegister">
              <Row className="rowInput">
                <Col md={12} lg={6} className="containerInputs">
                  <InputText
                    className={
                      credentialsError.emailError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                  <div>{credentialsError.emailError}</div>

                  <InputText
                    className={
                      credentialsError.passwordError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"password"}
                    name={"password"}
                    placeholder={"Contraseña"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                  <div>{credentialsError.passwordError}</div>

                  <InputText
                    className={
                      credentialsError.usernameError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"username"}
                    placeholder={"Nombre de usuario"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />

                  <InputText
                    className={
                      credentialsError.nameError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"name"}
                    placeholder={"Nombre"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />

                  <InputText
                    className={
                      credentialsError.surnameError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"surname"}
                    placeholder={"Apellido"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </Col>
                <Col
                  md={12}
                  lg={6}
                  className="containerInputs containerInput02"
                >
                  <InputText
                    className={
                      credentialsError.addressError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"address"}
                    placeholder={"Dirección"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />

                  <InputText
                    className={
                      credentialsError.phoneError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"phone"}
                    placeholder={"Teléfono"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />

                  <InputText
                    className={
                      credentialsError.genderError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"gender"}
                    placeholder={"Género"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />

                  <InputText
                    className={
                      credentialsError.postcodeError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"postcode"}
                    placeholder={"Codigo postal"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </Col>
                <div className="containerBtn">
                  <div
                    type="submit"
                    className={
                      registerAct
                        ? "registerSendDeac registerSendAct"
                        : "registerSendDeac"
                    }
                    onClick={
                      // Si el HOOK "registerAct" es true, el onclick nos permitirá ejecutar el registro.

                      registerAct
                        ? () => {
                            userRegister();
                          }
                        : () => {}
                    }
                  >
                    Registrarse
                  </div>
                </div>
              </Row>
            </Container>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
