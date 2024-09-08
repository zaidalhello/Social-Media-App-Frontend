
import axios from "axios";

const Api =axios.create({baseURL :"http://localhost:5000"});
Api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const AddPost=(data)=>Api.post('/Post/CreatNewPost',data)
export const getTimelinePost=(data)=>Api.post('/Post/getTimelinePosts',data)
export const LikeAndDisLikePost=(data)=>Api.post('/Post/LikeAndDisLikePost',data)