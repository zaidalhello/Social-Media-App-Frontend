import axios from "axios";
const Api =axios.create({baseURL :"http://localhost:5000"});
export const userChats= (id)=> Api.get(`/chat/${id}`)
export const finduserChats= (userid,senderid)=> Api.get(`/chat/find/${userid}/${senderid}`)