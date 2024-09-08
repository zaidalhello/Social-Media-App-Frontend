import React, { useEffect, useState } from "react";
import "./ChatConversation.css";
import { getUserbyID } from "../../api/UserApiRequest";
const ChatConversation = ({ data, currentUserid }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userid = data.members.find((id) => id !== currentUserid);
    const getUsersData = async () => {
     try {
      
        const  data  = await getUserbyID(userid);
      
      setUserData(data)  
      console.dir(userData)  
     } catch (error) {
        console.log(error)
     }
    };
    getUsersData()
  }, []);

  return (
    <>
      <div className="follower conversation">
        <div>
        
          <img
            src={userData?.profilePicture? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture :"https://cdn-icons-png.flaticon.com/512/9513/9513679.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.firstName} {userData?.lastName}</span>
              </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};
export default ChatConversation;
