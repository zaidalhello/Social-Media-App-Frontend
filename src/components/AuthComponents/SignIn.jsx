import React, { useState } from "react";
import "../../pages/Auth/Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../actions/AuthActions";

import  { BlinkBlur} from "react-loading-indicators";
const SignIn = ({ setIsSignup }) => {

    
  const dispatch = useDispatch();
  const loding=useSelector((state)=>state.auth.loading)
  const [signInData, setSignInData] = useState({
    userName: "",
    password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();

    for (const key in signInData) {
      if (signInData[key] === "") {
        alert("Please fill all required fields");
        return;
      }
    }
    
    dispatch(signIn(signInData));
  };
  const handelChanges = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };
  return (
    <div className="a-action">
      <form action="" className="infoForm" onSubmit={handelSubmit}>
        <h3>Login </h3>
        <input
          type="text"
          placeholder="UserName"
          className="InfoInput"
          name="userName"
          value={signInData.userName}
          onChange={handelChanges}
        />
        <input
          type="text"
          placeholder="password"
          className="InfoInput"
          name="password"
          onChange={handelChanges}
          value={signInData.password}
        />
     { loding?  <BlinkBlur color="Orange" size="medium" text="" textColor="" />:  <div className="cheakProfile">
          <span>
            Don't have an account?
            <button className="signstyle" onClick={() => setIsSignup(true)}>
              Sign Up
            </button>
          </span>
          <button type="submit" className="button InfoButton">
            Login
          </button>
        
        </div>}
      </form>
    </div>
  );
};

export default SignIn;
