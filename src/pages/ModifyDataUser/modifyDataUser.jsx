import { useEffect } from "react";
import { Footer } from "../../common/Footer/Footer"
import { NavBar } from "../../common/Navbar/NavBar"
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './modifyDataUser.css'
import { InputText } from "../../common/InputText/InputText";
import { validate } from "../../services/useful";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../../services/userSlice";

export const ModifyUser = () => {

  const navigate = useNavigate();

  const dataCredentialsRdx = useSelector(userData);

  let token = dataCredentialsRdx.credentials.token;

//HOOKS............

  // 1 - Primero siempre se comprueba el valor de los hooks
  const [credenciales, setCredenciales] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    username: "",
    phone: "",
    address: "",
    gender: "",
    postcode: ""
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    nameVali: false,
    surnameVali: false,
    emailVali: false,
    passwordVali:false,
    usernameVali:false,
    addressVali: false,
    phoneVali: false,
    genderVali: false,
    postcodeVali: false,
  })

  //Este hook consistirá en el lugar de guardado de mensajes de error, a priori estarán en comillas vacías
  const [credencialesError, setCredencialesError] = useState({
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

  //HANDLERS

  const inputHandler = (e) => {
    //inputHandler será la función adecuada para controlar el contenido que estamos introduciendo
    //en los inputs, su forma de manejarlo será actualizar las partes correspondientes del hook según el input
    //en el que estemos escribiendo

    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      //Este método hace una copia del estado del componente con spread para no tener que mutar el estado original,
      //posteriormente, mediante la técnica de diccionario de JS, asignamos el valor del input que esté escribiendose
      //EN ESE MOMENTO a la parte correspondiente del Hook.
    }));
  };

  //USEEFFECT

  //Funciones de ciclo de vida del componente, conocidas como useEffect

  // 3 - Ejecutamos los useEffect
  const [welcome, setWelcome] = useState("");

  //Este tipo de useEffect siempre se ejecuta cuando se actualice cualquier hook.....
  useEffect(() => {
 

    //Recorremos el primer for in para ver si hay errores en las credenciales....
    for(let error in credencialesError){
      if(credencialesError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }

    //Recorremos las credenciales con otro for in para comprobar en este caso si algún campo se ha dejado por rellenar...
    for(let vacio in credenciales){
      if(credenciales[vacio] === ""){
        setRegisterAct(false);
        return;
      }
    }

    //El último cortafuegos será un for in que recorrerá el hook valiCredenciales que mirará si todas las credenciales no sólo
    //están rellenas, sino que también han sido validadas
    for(let validated in valiCredenciales){
      if(valiCredenciales[validated] === false){
        setRegisterAct(false);
        return;
      }
    }
    //si llegamos a este punto es porque no hemos encontrado ningún error en el for in que recorre el hook de errores
    setRegisterAct(true);
  });

  //FUNCIONES
  //Funcion de validacion

  const checkError = (e) => {


    let error = "";

    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;
    
    //Aqui seteamos el hook de las validaciones
    console.log("asdfasdf",valiCredenciales)

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    //Aqui seteamos el hook de los errores

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const userRegister = () => {
    updateProfile(credenciales, token)

    setWelcome(`¡Tus cambios se han guardado correctamente!`);

                //Redirección a Home

                setTimeout(() => {
                  navigate("/data/user");
                }, 2000);       
  };

  return (
    <>
      <NavBar/>
      
      <div className="allContainer">
      <div className="allContainerRegister">
      <div className='containerTitle'>
      <div className="yourProfileTitle">Modifica tu perfil</div>
      </div>
      {welcome !== "" ? (
            <div className='dateConfirm'>{welcome}</div>
          ) : (
      <Container className="containerRegister">
        <Row className="rowInput">
          <Col md={12} lg={6} className="containerInputs">
              <InputText className={
                          credencialesError.emailError === ""
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
                  <div>{credencialesError.emailError}</div>
            
                <InputText className={
                          credencialesError.passwordError === ""
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
                <div>{credencialesError.passwordError}</div>
             
              <InputText className={
                          credencialesError.usernameError === ""
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
        
                <InputText className={
                          credencialesError.nameError === ""
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
              
                <InputText className={
                          credencialesError.surnameError === ""
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
          <Col md={12} lg={6} className="containerInputs cont-inp-2">
            
              <InputText className={
                          credencialesError.addressError === ""
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
           
              <InputText className={
                          credencialesError.phoneError === ""
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
              
              
              <InputText className={
                          credencialesError.genderError === ""
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

              <InputText className={
                          credencialesError.postcodeError === ""
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
        </Row>
        <div className="continerBtn">
            <div
              type="submit"
                className={
                  registerAct ? "loginSendDesign loginSendAct" : "loginSendDesign"
                }
                onClick={
                  //Si el hook registerAct es true, el onclick nos permitirá ejecutar la función que haría el registro....
                  registerAct
                    ? () => {
                        userRegister();
                      }
                    : () => {}
                }
              >
                Confirmar cambios
            </div>
        </div>
      </Container>
      )}
      </div>
      </div>
      <Footer/>
    </>
        );
}