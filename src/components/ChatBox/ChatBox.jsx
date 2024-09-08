import React, { useEffect, useRef, useState } from "react";
import { getUserbyID } from "../../api/UserApiRequest";
import { addMessages, getMessages } from "../../api/MessagesRequestApi";
import { finduserChats } from "../../api/ChatApiRequest";
import InputEmoji from "react-input-emoji";
import "./ChatBox.css";
const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
 
  const userId = chat?.members?.find((id) => id !== currentUser);
  const scroll = useRef();
  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])
  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      sendeID: currentUser,
      text: newMessage,
      chatID: chat._id,
    };
   
    // send message to socket server
    setSendMessage({ ...message, userId });
    // send message to database
    try {
      const { data } = await addMessages(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    if (chat) {
      const getUserData = async () => {
        try {
          const data = await getUserbyID(userId); // Adjust if your API response is different
          setUserData(data);
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      };
      getUserData();
    }
  }, [chat, currentUser]);

  useEffect(() => {
    if (chat) {
      const fetchMessages = async () => {
        try {
          console.log(userId, currentUser);
          const chatData = await finduserChats(userId, currentUser); // Adjust if your API response is different
          console.log("Chat data:", chatData.data.newChat._id);
          const data = await getMessages(chatData.data.newChat._id); // Adjust if your API response is different
          console.log("Messages data:", data);
          setMessages(data);
        } catch (error) {
          console.log("Error fetching messages:", error);
        }
      };
      fetchMessages();
    }
  }, [chat, currentUser]);
  useEffect(()=> {
    if (chat) {
      const fetchMessages = async () => {
        try {
          console.log(userId, currentUser);
          const chatData = await finduserChats(userId, currentUser); // Adjust if your API response is different
          console.log("Chat data:", chatData.data.newChat._id);
          const data = await getMessages(chatData.data.newChat._id); // Adjust if your API response is different
          console.log("Messages data:", data);
          setMessages(data);
        } catch (error) {
          console.log("Error fetching messages:", error);
        }
      };
      fetchMessages();
    }
  },[receivedMessage])
  return (
    <>
      {chat && currentUser ? (
        <div className="ChatBox-container">
          <div className="chat-header">
            <div>
              <img
                src={
                  userData?.profilePicture
                    ? process.env.REACT_APP_PUBLIC_FOLDER +
                      userData.profilePicture
                    : "https://cdn-icons-png.flaticon.com/512/9513/9513679.png"
                }
                alt="Profile"
                className="followerImage"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="name" style={{ fontSize: "0.8rem" }}>
                <span>
                  {userData?.firstName} {userData?.lastName}
                </span>
               
              </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
          </div>
          <div className="chat-body">
            {messages.length > 0 ? (
              messages.map((message) => (
                <div ref={scroll}
                  key={message._id} // Ensure each message has a unique key
                  className={
                    message.sendeID === currentUser ? "message own" : "message"
                  }
                >
                  <span>{message.text}</span>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
          <div className="chat-sender">
           
            <InputEmoji value={newMessage} onChange={handleChange} />
            <div className="send-button button" onClick={handleSend}>
              Send
            </div>
            <input type="file" name="" id="" style={{ display: "none" }} />
          </div>{" "}
        </div>
      ) : (
        <span className="chatbox-empty-message">
          Tap on a chat to start conversation...
        </span>
      )}
    </>
  );
};

export default ChatBox;
