import React, { useEffect } from "react";
import "./PostSide.css";
import PostShare from "./PostShare/PostShare";
import Posts from "./Posts/Posts";
import { getAllUsers, getUser } from "../../../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
const PostSide = ({ ProfilePage = false }) => {
  
  const Authuser = useSelector((state) => state.auth.authData.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser(Authuser._id))
    dispatch(getAllUsers(Authuser?._id));
  },[])
  return (
    <div className="PostSide" style={{ overflow: ProfilePage ? "" : "auto" }}>
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
