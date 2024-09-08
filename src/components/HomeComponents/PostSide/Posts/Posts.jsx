import React, { useEffect } from "react";
import "./Posts.css";

import { BlinkBlur } from "react-loading-indicators";
import PostCard from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../../../actions/PostsAction";
const Posts = ({isProfilePage=false}) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.authData.user);
  const MediaPosts = useSelector((state) => state.Post.MediaPosts);
  const Posts = useSelector((state) => state.Post.Posts);
  const Getloading = useSelector((state) => state.Post.Getloading);
  useEffect(() => {
    dispatch(getTimelinePosts({ userid: user._id }));
  
  }, [Posts]);
  return (
    <div className="Posts">
      {Getloading ? (
        <center>
          {" "}
          <BlinkBlur
            color="Orange"
            size="medium"
            text="Loding.."
            textColor=""
          />
        </center>
      ) : Array.isArray(MediaPosts) && MediaPosts.length > 0 ? (
        MediaPosts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ).map((post, id) => <PostCard data={post} id={id} key={id} />)
      ) : (
        <center>No Posts Available</center>
      )}
    </div>
  );
};

export default Posts;
