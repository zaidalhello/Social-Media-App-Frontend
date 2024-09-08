import React, { useState } from "react";
import "./PostCard.css";
import Comment from "../../../../img/comment.png";
import Share from "../../../../img/share.png";
import Heart from "../../../../img/like.png";
import NotLike from "../../../../img/notlike.png";
import { useDispatch, useSelector } from "react-redux";
import { useSetState } from "@mantine/hooks";
import { likeAndDisLikePost } from "../../../../actions/PostsAction";

const PostCard = ({ data }) => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData.user);
  const likedByUser =
    Array.isArray(data.liked) && data.liked.includes(user._id);

  const [liked, setLiked] = useState(likedByUser);
  const [likesNumber, setLikesNumber] = useState(
    Array.isArray(data.liked) ? data.liked.length : 0
  ); 

  const handleLike = () => {
    setLiked(!liked);
    setLikesNumber((prev) => (liked ? prev - 1 : prev + 1));
    dispatch(likeAndDisLikePost({ userid:user._id, postID :data._id}))

    
  };
  return (
    <div className="PostCard">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
        srcset=""
      />
      <div className="details">
        <span>
          <b>{data.image}</b>{" "}
        </span>
        <br />
        <span>{data.desc}</span>
      </div>
      <span> {likesNumber} Likes</span>
      <div className="PostReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          srcset=""
          onClick={handleLike}
          style={{ cursor: "pointer" }}
        />
        <img src={Comment} alt="" srcset="" />
        <img src={Share} alt="" srcset="" />
      </div>
    </div>
  );
};

export default PostCard;
