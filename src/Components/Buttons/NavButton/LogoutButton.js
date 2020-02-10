import React from "react";
import "./NavButton.scss";
import { auth } from "../../../firebase/firebase";
import { resetBooking } from "../../../redux/user/userActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const LogoutButton = ({ resetBooking }) => {
  const history = useHistory();
  const handleLogout = () => {
    resetBooking();
    auth.signOut().then(() => {
      console.log("Signed out successful");
      history.push("/");
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

const mapDispatchToProps = dispatch => ({
  resetBooking: () => dispatch(resetBooking)
});

export default connect(null, mapDispatchToProps)(LogoutButton);
