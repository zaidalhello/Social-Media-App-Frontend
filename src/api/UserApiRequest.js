import axios from "axios";
const Api =axios.create({baseURL :"http://localhost:5000"});
export const updateUser= (userState)=> Api.post(`/user/updateUser`,userState)
export const getUserbyID= (id)=> Api.get(`/user/getUser/${id}`).then((res)=>{
return res.data.otherDetails
})
export const getAllUsers= (id)=> Api.get(`/user/getAllUsers/${id}`).then((res)=>{
return res.data.users
})
export const followUnfollwUsers= (id,currentUserID)=> Api.put(`/user/followUser/${currentUserID}&${id}`).then((res)=>{
return res.data.message
})