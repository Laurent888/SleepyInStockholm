import React from "react";
import "./NavButton.scss";
import { auth } from "../../../firebase/firebase";

const LogoutButton = props => {
  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log("Signed out successful");
    });
  };
  return (
    <div className="nav-btn" onClick={handleLogout}>
      {props.icon ? (
        <div className="nav-btn_icon">
          <i className={props.icon}></i>
        </div>
      ) : null}
      <div className="nav-btn_label">Log Out</div>
    </div>
  );
};

export default LogoutButton;
