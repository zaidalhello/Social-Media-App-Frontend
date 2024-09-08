import React, { useEffect, useState } from "react";
import "./FolowersCard.css";
import { useDispatch, useSelector } from "react-redux";
import { followUnfollwUser, getAllUsers, getUser } from "../../../../actions/UserAction";
import Snackbar from "@mui/material/Snackbar";
function FolowersCard() {
  const user =  useSelector((state) => state.user?.UserData);
  
  const allUsers = useSelector((state) => state.user?.AllUsersData) || [];
  const msg = useSelector((state) => state.user?.msg) || [];
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers(user?._id));
  }, []);

  function checkFollowers(id, user) {
    return Array.isArray(user?.following) && user?.following.includes(id);
  }

  const handleFollowToggle = (followerId) => {
    dispatch(followUnfollwUser(user?._id, followerId)).then(() => {
      setOpen(true); // Show snackbar after action
      setTimeout(() => setOpen(false), 2000); // Hide snackbar after 2 seconds
     
      dispatch(getUser(user?._id))
    });
  };

  return (
    <div className="FolowersCard">
      <h3>People you may know</h3>

      {allUsers?.length > 0 ? (
        allUsers.map((follower) => {
          const isFollowing = checkFollowers(follower?._id, user);

          return (
            <div className="Followers" key={follower?._id}>
              <div>
                <img
                  src={
                    follower?.profilePicture
                      ? process.env.REACT_APP_PUBLIC_FOLDER +
                        follower?.profilePicture
                      : "https://cdn-icons-png.flaticon.com/512/9513/9513679.png"
                  }
                  alt=""
                  className="FollowersImg"
                />
                <div className="name">
                  <span>{follower?.firstName}</span>
                  <span className="username">@{follower?.userName}</span>
                </div>
              </div>
              <button
                className="button fcbutton"
                onClick={() => handleFollowToggle(follower?._id)}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
            </div>
          );
        })
      ) : (
        <p style={{ background: "inherit" }}>No users on this site</p>
      )}
      <Snackbar open={open} autoHideDuration={2000} message={msg} />
    </div>
  );
}

export default FolowersCard;
