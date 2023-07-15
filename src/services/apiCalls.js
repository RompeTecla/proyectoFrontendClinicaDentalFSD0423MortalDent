import axios from "axios";

const root = "http://localhost:3000/";

export const loginMe = async (body) => {
  return await axios.post(`${root}login`, body);
};

export const registerUser = async (body) => {
  return await axios.post(`${root}users/reg`, body);
};

export const bringUsers = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.get(`${root}users/all`, config);
};

export const appointmentsAll = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.get(`${root}appointments/doctor`, config);
};

export const bookAppointment = async (body, token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.post(`${root}appointments`, body, config);
};

export const bringAppointments = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.get(`${root}appointments`, config);
};

export const updateAppointment = async (id, body, token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.put(`${root}appointments/${id}`, body, config);
};

export const deleteMyAppointment = async (id, token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.delete(`${root}appointments/${id}`, config); // Línea corregida
};

export const dataUsers = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.get(`${root}users`, config);
};

export const updateProfile = async (dataUserUpdate, token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  console.log(token);

  return await axios.put(`${root}users`, dataUserUpdate, config);
};

export const bringAllAppointmentsAsDoctor = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.get(`${root}appointments/alldoctor`, config);
};
