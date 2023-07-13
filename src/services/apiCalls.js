import axios from 'axios'

const root = "http://localhost:3000/"

export const loginMe = async(body) => {
    return await axios.post(`${root}login`, body)
}

export const registerUser = async (body) => {
    return await axios.post(`${root}users/reg`, body)
  }