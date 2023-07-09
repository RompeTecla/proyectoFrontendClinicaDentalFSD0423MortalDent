import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./NavBar.css";
import { Navigator } from "../Navigator/Navigator";
import { Logo } from "../Logo/Logo";

export const NavBar = () => {
  return (
    <Navbar className="allNav">
      <div className="rowNav">
          
        <div className="logotypeMortaldent">
        <Logo />
          <div className="navbarTitle">MORTALDENT</div>
        </div>
        <>
          <div className="navMenu">
            <Navigator ruta={"Inicio"} destino={"/"} />
            <Navigator ruta={"Nosotros"} destino={"/about"} />
            <Navigator ruta={"Servicios"} destino={"/treatments"} />
            <Navigator ruta={"Regístrate"} destino={"/register"} />
            <Navigator ruta={"Login"} destino={"/login"} />
          </div>
        </>
      </div>
    </Navbar>
  );
};
