import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Navbar.css";
import { Navigator } from "../Navigator/Navigator";

export const NavBar = () => {
  return (

    <Navbar className="all-nav">
      <div className="row-nav">
        <div className="mortaldent">
          <div className="navbarTitle">MORTALDENT</div>
        </div>
        <>
          <div className="nav-init">
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
