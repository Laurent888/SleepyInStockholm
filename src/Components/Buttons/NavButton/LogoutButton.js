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
      <div className="nav-btn_label">
        Log Out <span className="mdi mdi-logout"></span>
      </div>
    </div>
  );
};

export default LogoutButton;
