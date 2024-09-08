import React from "react";
import "./ProfileCard.css";
import cover from "../../../../img/cover.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({ ProfilePage = false }) => {
  // Fetching the user data from Redux store
  const user = useSelector((state) => state.user.UserData);
  const loading = useSelector((state) => state.user.loading);
  const updateduser = useSelector((state) => state.user.UserData);
  const MediaPosts = useSelector((state) => state.Post.MediaPosts);

  // Check if user data is available
  const userFollowers = Array.isArray(user?.followers) ? user.followers.length : 0;
  const userFollowing = Array.isArray(user?.following) ? user.following.length : 0;

  return (
    <div className="ProfileCard">
      <div className="ProfileImges">
        <img
          src={
            updateduser?.coverPicture
              ? process.env.REACT_APP_PUBLIC_FOLDER + updateduser.coverPicture
              : cover
          }
          alt=""
        />
        <img
          src={
            updateduser?.profilePicture
              ? process.env.REACT_APP_PUBLIC_FOLDER + updateduser.profilePicture
              : "https://cdn-icons-png.flaticon.com/512/9513/9513679.png"
          }
          style={{ background: "gray" }}
          alt=""
        />
      </div>
      <div className="ProfileName">
        <span>
          {user?.firstName} {user?.lastName}
        </span>
        <span>{user?.about}</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{userFollowers}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{userFollowing}</span>
            <span>Following</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl" />
              <div className="follow">
                <span>{MediaPosts.filter((post) => post.userid === user?._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      <span style={{ display: ProfilePage ? "none" : "flex" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "inherit"
          }}
          to={'/Profile'}
        >
          My Profile
        </Link>
      </span>
    </div>
  );
};

export default ProfileCard;
