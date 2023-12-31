
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Treatments } from "../Treatments/Treatments";
import { Appointments } from "../Appointments/Appointments";

export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to = "/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/appointments/book" element={<Appointments />} />
        </Routes>
    );
}