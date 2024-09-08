import axios from "axios";
const Api =axios.create({baseURL :"http://localhost:5000"});
export const logIn=(formData)=>Api.post('/Auth/login',formData)
export const RegisterNewUser=(formData)=>Api.post('/Auth/RegisterNewUser',formData)