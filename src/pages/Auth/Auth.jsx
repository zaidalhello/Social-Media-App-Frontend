import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import SignUp from "../../components/AuthComponents/SignUp.jsx";
import SignIn from "../../components/AuthComponents/SignIn.jsx";

export const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="Auth">
      <div className="logoName">
        <img src={Logo} alt="" srcset="" />
        <div className="webName">
          <h1> Zaid Social Media website</h1>
          <h4>Talk around the world </h4>
        </div>
      </div>
      {isSignup ? (
        <SignUp setIsSignup={setIsSignup} />
      ) : (
        <SignIn setIsSignup={setIsSignup} />
      )}
    </div>
  );
};
