import React from "react";
import LogoSeach from "./LogoSeach/LogoSeach";
import ProfileCard from "./ProfileCard/ProfileCard";
import FolowersCard from "./FolowersCard/FolowersCard";
import "./ProfileSide.css";
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSeach />
      <ProfileCard />
      <FolowersCard />
    </div>
  );
};

export default ProfileSide;
