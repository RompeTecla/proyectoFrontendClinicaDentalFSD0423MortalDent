import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./NavBar.css";
import { Navigator } from "../Navigator/Navigator";

export const NavBar = () => {
  return (

    <Navbar className="allNav">
      <div className="rowNav">
        <div className="mortaldent">
          <div className="navbarTitle">MORTALDENT</div>
        </div>
        <>
          <div className="navMenu">
            <Navigator ruta={"Inicio"} destino={"/"} />
            <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
            <Navigator ruta={"Registro"} destino={"/register"} />
            <Navigator ruta={"Inicio sesion"} destino={"/login"} />
          </div>
        </>
      </div>
    </Navbar>
  );
};
