import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './Register.css'
import { Footer } from "../../common/Footer/Footer";
import { NavBar } from "../../common/Navbar/NavBar";
import { useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { validate } from "../../services/useful";
import { registerUser } from "../../services/apiCalls";

export const Register = () => {

  const navigate = useNavigate();

////////////////////////////////////////////////// H O O K S //////////////////////////////////////////////////

  // Comprobacion inicial de Hooks con campo vacío.
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

  // Con este HOOK se recogen los errores que inicialmente se mantiene en string vacío.
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

  //////////////////////////////////////////////// H A N D L E R S ////////////////////////////////////////////////

  //inputHandler se maneja en el input en el que introducimos cada credencial del usuario, y el diferencia cada una de las credenciales
  const inputHandler = (e) => {

    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      //Con el ...spread... se hace una copia del estado inicial del componente para no tener que mutar el original,
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
    registerUser(credenciales)
    console.log(credenciales)

    setWelcome(`Gracias por confiar en nosotros`);

                //Redirección a Home

                setTimeout(() => {
                  navigate("/login");
                }, 2000);
                 
  };

  