import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModel/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/AuthActions";
import { getUser } from "../../../actions/UserAction";
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  
  const user = useSelector((state) => state.user.UserData);
  const Authuser = useSelector((state) => state.auth.authData.user);
  
  const dispatch=useDispatch()
  const handleLogOut = ()=> {
    dispatch(logout())
  }
  useEffect(()=>{
    dispatch(getUser(Authuser._id))
  },[])
  return (
    <div className="InfoCard">
      <div className="InfoHeader">
        <h4>Your Info</h4>
        <UilPen 
            onClick={() => setModalOpened(true)}
        />
        <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            user={Authuser}
            
          />
      </div>
      <div className="Info">
        <span>
            <b>status </b>
        </span>
        <span>{user?.relationShip}</span>
      </div>
      <div className="Info">
        <span>
            <b>Lives in </b>
        </span>
        <span>{user?.livesin}</span>
      </div>
      <div className="Info">
        <span>
            <b>work at </b>
        </span>
        <span>{user?.workat}</span>
      </div>
      <button className="button logout-Btn" onClick={handleLogOut} >Logout</button>
    </div>
  );
};

export default InfoCard;
