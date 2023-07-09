import React from "react";
import "./Logo.css";
import logoMortaldent from "../../assets/img/logoMortaldent.png";

export const Logo = () => {
  return (
    <div className="logoBox">
      <img className="logoImg" src={logoMortaldent} alt="Logo de la clínica"/>
    </div>
  );
};
