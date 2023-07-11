import React from "react";
import '../Navbar/NavBar.css'
import Navbar from "react-bootstrap/Navbar";
import { Navigator } from "../Navigator/Navigator";
import { Logo } from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../services/userSlice";
import { useEffect } from "react";

export const NavBar = () => {
  const dispatch = useDispatch();
  const datosCredencialesRedux = useSelector(userData);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const logoutFunction = () => {
    dispatch(logout({ credentials: {}, token: "" }));
  };

  return (
    <Navbar className="allNav">
      <div className="rowNav">
        <div className="logotypeMortaldent">
          <Logo />
          <div className="navbarTitle">MORTALDENT</div>
        </div>
        <>
          <div className="navMenu">
            {datosCredencialesRedux?.credentials?.decodificado?.rolId ? (
              <>
                {datosCredencialesRedux?.credentials?.decodificado?.rolId ===
                1 ? (
                  <>
                    <Navigator ruta={"Inicio"} destino={"/"} />
                    <div onClick={() => navigate("/users")}>Usuarios</div>
                    <div>
                      {datosCredencialesRedux?.credentials?.decodificado
                        ?.username}
                    </div>
                    <div
                      onClick={() => {
                        navigate("/login");
                        logoutFunction();
                      }}
                    >
                      Cerrar sesión
                    </div>
                  </>
                ) : datosCredencialesRedux?.credentials?.decodificado
                    ?.rolId === 2 ? (
                  <>
                    <Navigator ruta={"Inicio"} destino={"/"} />
                    <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
                    <div onClick={() => navigate("/appointments")}>Citas</div>
                    <div>
                      {datosCredencialesRedux?.credentials?.decodificado
                        ?.username}
                    </div>
                    <div
                      onClick={() => {
                        navigate("/login");
                        logoutFunction();
                      }}
                    >
                      Cerrar sesión
                    </div>
                  </>
                ) : datosCredencialesRedux?.credentials?.decodificado
                    ?.rolId === 3 ? (
                  <>
                    <Navigator ruta={"Inicio"} destino={"/"} />
                    <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
                    <div onClick={() => navigate("/appointments/book")}>
                      Citas
                    </div>
                    <div>
                      {datosCredencialesRedux?.credentials?.decodificado
                        ?.username}
                    </div>
                    <div
                      onClick={() => {
                        navigate("/login");
                        logoutFunction();
                      }}
                    >
                      Cerrar sesión
                    </div>
                  </>
                ) : (
                  <>
                    <Navigator ruta={"Inicio"} destino={"/"} />
                    <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
                    <div>
                      {datosCredencialesRedux?.credentials?.decodificado
                        ?.username}
                    </div>
                    <div
                      onClick={() => {
                        navigate("/login");
                        logoutFunction();
                      }}
                    >
                      Cerrar sesión
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <Navigator ruta={"Inicio"} destino={"/"} />
                <Navigator ruta={"Nosotros"} destino={"/about"} />
                <Navigator ruta={"Servicios"} destino={"/treatments"} />
                <Navigator ruta={"Regístrate"} destino={"/register"} />
                <Navigator ruta={"Login"} destino={"/login"} />
              </>
            )}
          </div>
        </>
      </div>
    </Navbar>
  );
};