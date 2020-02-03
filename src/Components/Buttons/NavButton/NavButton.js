import React from "react";
import "./NavButton.scss";
import { Link } from "react-router-dom";

const NavButton = props => {
  return (
    <Link to="/">
      <div className="nav-btn">
        {props.icon ? (
          <div className="nav-btn_icon">
            <i className={props.icon}></i>
          </div>
        ) : null}
        <div className="nav-btn_label">{props.label}</div>
      </div>
    </Link>
  );
};

export default NavButton;
