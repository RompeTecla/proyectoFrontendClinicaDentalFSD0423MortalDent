import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { Footer } from "../../common/Footer/Footer";
import { NavBar } from "../../common/Navbar/NavBar";
import { ButtonAct } from "../../common/ButtonAct/ButtonAct";
import { InputText } from "../../common/InputText/InputText";
import { useNavigate } from "react-router-dom";
import { validate } from "../../services/useful";
import { useSelector, useDispatch } from "react-redux";
import { login, userData } from "../../services/userSlice";
import { loginMe } from "../../services/apiCalls";
import { decodeToken } from "react-jwt";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);
  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali: false,
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [loginAct, setLoginAct] = useState(false);

  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    if (credentialsRdx.credentials.token) {
      navigate("/");
    }
  }, []);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const logMe = () => {
    loginMe(credenciales)
      .then((respuesta) => {
        let decodificado = decodeToken(respuesta.data.token);
        let datosBackend = {
          token: respuesta.data.token,
          usuario: "decoded",
          decodificado,
        };

        dispatch(login({ credentials: datosBackend }));

        const welcomeMessage = getWelcomeMessage(
          decodificado.gender,
          decodificado.name
        );
        setWelcome(welcomeMessage);

        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => console.log(error));
  };

  const inputValidate = (e) => {
    switch (e.target.name) {
      case "email":
        break;

      case "password":
        if (credenciales.password.length < 8) {
          setCredencialesError((prevState) => ({
            ...prevState,
            passwordError: "Mínimo 8 caracteres",
          }));
        } else {
          setCredencialesError((prevState) => ({
            ...prevState,
            passwordError: "",
          }));
        }
        break;

      default:
    }
  };

  useEffect(() => {
    for (let error in credencialesError) {
      if (credencialesError[error] !== "") {
        setLoginAct(false);
        return;
      }
    }

    for (let vacio in credenciales) {
      if (credenciales[vacio] === "") {
        setLoginAct(false);
        return;
      }
    }

    for (let validated in valiCredenciales) {
      if (valiCredenciales[validated] === false) {
        setLoginAct(false);
      }
    }

    setLoginAct(true);
  });

  const checkError = (e) => {
    let error = "";

    let checked = validate(e.target.name, e.target.value, e.target.required);

    error = checked.message;

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const getWelcomeMessage = (gender, name) => {
    if (
      gender === "female" ||
      gender === "Female" ||
      gender === "mujer" ||
      gender === "Mujer" ||
      gender === "femenino" ||
      gender === "Femenino"
    ) {
      return `Bienvenida ${name}!`;
    } else {
      return `Bienvenido ${name}!`;
    }
  };

  return (
    <>
      <NavBar />
      <div className="loginDesignAllContainer">
        {welcome !== "" ? (
          <div className="msgConfirm">{welcome}</div>
        ) : (
          <div className="allForms">
            <div className="allContainerLogin">
              <Form className="inForm">
                <Form.Group
                  className="mb-3 containerForms"
                  controlId="basicEmailControl"
                >
                  <div className="containerIcon">
                    <i className="bi bi-person-workspace loginIcon"></i>
                  </div>
                  <>
                    <div className="inputsLogin">
                      <InputText
                        className={
                          credencialesError.passwordError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                        type={"email"}
                        name={"email"}
                        placeholder={"Email"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                        validateFunction={(e) => inputValidate(e)}
                      />
                      <Form.Text className="textDanger">
                        {credencialesError.emailError}
                      </Form.Text>
                      <Form.Group
                        className="mb-3"
                        controlId="basicPasswordControl"
                      >
                        <InputText
                          className={
                            credencialesError.passwordError === ""
                              ? "inputBasicDesign"
                              : "inputBasicDesign inputErrorDesign"
                          }
                          type="password"
                          name="password"
                          placeholder="Contraseña"
                          required={true}
                          changeFunction={(e) => inputHandler(e)}
                          blurFunction={(e) => checkError(e)}
                          validateFunction={(e) => inputValidate(e)}
                        />
                        <Form.Text className="textDanger">
                          {credencialesError.passwordError}
                        </Form.Text>
                      </Form.Group>
                      <div className="btnContainer">
                        <ButtonAct
                          className={
                            loginAct
                              ? "loginSendDesign"
                              : "loginSendDesign"
                          }
                          buttonName="Confirmar"
                          onClick={loginAct ? logMe : () => {}}
                        />
                      </div>
                    </div>
                  </>
                </Form.Group>
              </Form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
