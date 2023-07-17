import React, { useState, useEffect } from "react";
import "./dataUser.css";
import { dataUsers } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../../services/userSlice";
import { addChoosen } from "../../services/detailSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../common/Navbar/NavBar";
import { Footer } from "../../common/Footer/Footer";

export const ProfileData = () => {
  const [users, setUsers] = useState([]);

  const ReduxCredentials = useSelector(userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (users.length === 0) {
      dataUsers(ReduxCredentials.credentials.token)
        .then((result) => {
        //console.log(result);
          //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
          setUsers(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }));

    setTimeout(() => {
      navigate("/modify/user");
    }, 500);
  };

  return (
    <>
      <NavBar />
      <div className="allContainer">
        <div className="usersDesign">
          <div className="iconUser">
            <i className="bi bi-person-bounding-box"></i>
          </div>
          <div className="line01">
            Email:<div className="data-user">{users.email}</div>
          </div>
          <div className="line01">
            Nombre de usuario:<div className="data-user">{users.username}</div>
          </div>
          <div className="line01">
            Nombre:<div className="data-user">{users.name}</div>
          </div>
          <div className="line01">
            Teléfono:<div className="data-user">{users.phone}</div>
          </div>
          <div className="line01">
            Dirección:<div className="data-user">{users.address}</div>
          </div>
          <div className="line01">
            Codigo Postal:<div className="data-user">{users.postcode}</div>
          </div>
          <div className="line01">
            Género:<div className="data-user">{users.gender}</div>
          </div>
          <div
            className="Confirm btn01"
            onClick={() => {
              selected();
            }}
          >
            Modificar mis datos
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
