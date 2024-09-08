import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import LogoSeach from "../../components/HomeComponents/ProfileSide/LogoSeach/LogoSeach";
import { useDispatch, useSelector } from "react-redux";
import { userChats } from "../../api/ChatApiRequest";
import ChatConversation from "../../components/ChatConversation/ChatConversation";

import { Link } from "react-router-dom";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { io } from "socket.io-client";
import ChatBox from "../../components/ChatBox/ChatBox";
import { logout } from "../../actions/AuthActions";
import Dropdown from "../../components/Dropdown/Dropdown";
const Chat = () => {
  const user = useSelector((state) => state.auth.authData.user);

  const [chats, setChats] = useState();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [isSelectChat, setisSelectChat] = useState(false);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const socket = useRef();
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        console.log("Fetched chats:", data);
        setChats(data.newChat || []);
        console.log(currentChat);
      } catch (error) {
        console.error("Failed to fetch chats:", error);
      }
    };

    getChats();
  }, [user]);
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data);
      setReceivedMessage(data);
    });
  });
  const dispatch=useDispatch()
  const handleLogOut = ()=> {
    dispatch(logout())
  }
  return (
    <div className="Chat">
 
 
      <div className="Left-side-chat">
        <div className="onSamallScreen">
        <LogoSeach />{" "}
        </div>
        <div className="Chat-container">
        <Dropdown/>
          <h2>Chats</h2>    
          
          <div className="Chat-list">
            {Array.isArray(chats) && chats.length > 0
              ? chats.map((chat) => (
                  <div
                    key={chat._id}
                    onClick={() => {
                      setCurrentChat(chat);
                      setisSelectChat(true)
                    }}
                  >
                    <ChatConversation data={chat} currentUserid={user._id} />
                  </div>
                ))
              : "No Conversation Found"}
          </div>
        </div>
      </div>
     
      <div className="Right-side-chat">

        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
        
        
        
          <div className="NavIcons onSamallScreen">
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
            </Link>
            <svg
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
        </div>

       {isSelectChat ?<ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />:"  Tap on a chat to start conversation..."}
      </div>
    </div>
  );
};

export default Chat;
