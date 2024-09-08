import React, { useState } from "react";
import  { BlinkBlur} from "react-loading-indicators";
import "../../pages/Auth/Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/AuthActions";

const SignUp = ({ setIsSignup }) => {
  const dispatch = useDispatch();
  const loding=useSelector((state)=>state.auth.loading)
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    ConfirmPassword: "",
  });
  const [confiermPass, setConfirmPass] = useState(true);
  const handelChanges = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    if (e.target.name === "password" || e.target.name === "ConfirmPassword") {
      setConfirmPass(signupData.password === e.target.value);
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.ConfirmPassword) {
      setConfirmPass(false);
      return;
    }
    for (const key in signupData) {
      if (signupData[key] === "") {
        alert("Please fill all required fields");
        return;
      }
    } 
    const { ConfirmPassword, ...dataToSend } = signupData;

    // Dispatch the action with the data excluding ConfirmPassword
    dispatch(signUp(dataToSend));
  };
  return (
    <div className="a-action">
      <form action="" className="infoForm" onSubmit={handelSubmit}>
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="InfoInput"
            name="firstName"
            value={signupData.firstName}
            onChange={handelChanges}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="InfoInput"
            name="lastName"
            value={signupData.lastName}
            onChange={handelChanges}
          />
        </div>
        <input
          type="text"
          placeholder="userName"
          className="InfoInput"
          name="userName"
          value={signupData.userName}
          onChange={handelChanges}
        />
        <div>
          <input
            type="text"
            placeholder="password"
            className="InfoInput"
            name="password"
            value={signupData.password}
            onChange={handelChanges}
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="InfoInput"
            name="ConfirmPassword"
            value={signupData.ConfirmPassword}
            onChange={handelChanges}
          />
        </div>
        <span className="alartMsg">
          {confiermPass ? "" : "* Confierm Passwod is not the same"}
        </span>
        {loding?  <BlinkBlur color="Orange" size="medium" text="" textColor="" />:
         <div className="cheakProfile" >
         <span>
           Already have an account?
           <button
             type="button"
             className="signstyle"
             onClick={() => setIsSignup(false)}
           >
             Login
           </button>
         </span>
         <button type="submit" className="button InfoButton">
           SignUp
         </button>
       </div>
        }
     
      </form>
    </div>
  );
};

export default SignUp;
