import React from "react";
import "./ButtonGoogle.scss";
import GoogleLogo from "../../../img/google-logo.png";
import { signinWithGoogle } from "../../../firebase/firebase";

const ButtonGoogle = props => {
  return (
    <div className="google-btn" onClick={signinWithGoogle}>
      <div className="google-btn_logo">
        <img src={GoogleLogo} alt="google-logo" />
      </div>
      <div className="google-btn_label">{props.label}</div>
    </div>
  );
};

export default ButtonGoogle;
