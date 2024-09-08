import React from "react";
import "./LogoSeach.css";
import Logo from "../../../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSeach = () => {
  return (
    <div className="LogoSeach">
      <img src={Logo} alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
        <UilSearch  />
        </div>
      </div>
    </div>
  );
};

export default LogoSeach;
