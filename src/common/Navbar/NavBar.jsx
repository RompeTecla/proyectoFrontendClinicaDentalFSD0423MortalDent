import React from "react";
import "../Navbar/NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import { Logo } from "../Logo/Logo";
import { Navigator } from "../Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../services/userSlice";
import { useEffect } from "react";

export const NavBar = () => {
  const dispatch = useDispatch();
  const datosCredencialesRedux = useSelector(userData);

  const logoutFunction = () => {
    dispatch(logout({ credentials: {}, token: "" }));
  };

  const navigate = useNavigate();

  useEffect(() => {});

  return (
    <Navbar className="allNav">
      <div className="rowNav">
        <div className="logotypeMortaldent">
          <Logo />
          <div className="navbarTitle">MORTALDENT</div>
        </div>
        {!datosCredencialesRedux?.credentials?.decodificado?.rolId ? (
          <>
            <div className="navMenu">
              <Navigator ruta={"Inicio"} destino={"/"} />
              <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
              <Navigator ruta={"Registro"} destino={"/register"} />
              <Navigator ruta={"Login"} destino={"/login"} />
            </div>
          </>
        ) : datosCredencialesRedux?.credentials?.decodificado?.rolId === 3 ? (
          <>
            <div className="navMenu">
              <Navigator ruta={"Inicio"} destino={"/"} />
              <div onClick={() => navigate("/users")}>Usuarios</div>
              <div onClick={() => navigate("/data/user")}>
                {datosCredencialesRedux?.credentials?.decodificado?.username}
              </div>
              <div
                onClick={() => {
                  navigate("/login");
                  logoutFunction();
                }}
              >
                Logout
              </div>
            </div>
          </>
        ) : datosCredencialesRedux?.credentials?.decodificado?.rolId === 2 ? (
          <>
            <div className="navMenu">
              <Navigator ruta={"Inicio"} destino={"/"} />
              <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
              <div onClick={() => navigate("/appointments")}>Citas</div>
              <div onClick={() => navigate("/data/user")}>
                {datosCredencialesRedux?.credentials?.decodificado?.username}
              </div>
              <div
                onClick={() => {
                  navigate("/login");
                  logoutFunction();
                }}
              >
                Logout
              </div>
            </div>
          </>
        ) : datosCredencialesRedux?.credentials?.decodificado?.rolId === 1 ? (
          <>
            <div className="navMenu">
              <Navigator ruta={"Inicio"} destino={"/"} />
              <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
              <div onClick={() => navigate("/appointments/book")}>Citas</div>
              <div onClick={() => navigate("/data/user")}>
                {datosCredencialesRedux?.credentials?.decodificado?.username}
              </div>
              <div
                onClick={() => {
                  navigate("/login");
                  logoutFunction();
                }}
              >
                Logout
              </div>
            </div>
          </>
        ) : (
          <div className="navMenu">
            <>
              <Navigator ruta={"Registro"} destino={"/register"} />
              <Navigator ruta={"Login"} destino={"/login"} />
            </>
          </div>
        )}
      </div>
    </Navbar>
  );
};
