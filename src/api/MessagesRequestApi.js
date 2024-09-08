import axios from "axios";
const Api =axios.create({baseURL :"http://localhost:5000"});
export const getMessages= (id)=> Api.get(`/Message/${id}`).then((res)=>{
    return res.data
    })
export const addMessages= (msg)=> Api.post(`/Message`,msg)