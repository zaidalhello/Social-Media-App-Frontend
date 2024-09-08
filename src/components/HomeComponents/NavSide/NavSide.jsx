import React, { useState } from "react";
import "./NavSide.css";
import Home from "../../../img/home.png";
import Comment from "../../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "./TrendCard/TrendCard";
import ShareModal from "../../ProfileComponents/ShareModal/ShareModal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/AuthActions";
const NavSide = () => {
  const dispatch=useDispatch()
  const handleLogOut = ()=> {
    dispatch(logout())
  }
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="NavSide">
      <div className="NavIcons">
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            width: "1.5rem",
            height: "1.5rem",
            cursor: "pointer",
          }}
          to={"/home"}
        >
          <img
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "1.5rem",
              height: "1.5rem",
              cursor: "pointer",
            }}
            src={Home}
            alt=""
            srcset=""
          />
        </Link>
     
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            width: "1.5rem",
            height: "1.5rem",
            cursor: "pointer",
          }}
          to={"/Chat"}
        >
          <img src={Comment} alt="" srcset="" />
        </Link>   <svg
        onClick={handleLogOut}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"
          ></path>
        </svg>
      </div>
      <TrendCard />
      <button
        onClick={() => setModalOpened(true)}
        className="button nav-button"
      >
        Share
      </button>
    </div>
  );
};

export default NavSide;
