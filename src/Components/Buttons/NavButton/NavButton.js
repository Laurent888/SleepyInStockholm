import React from "react";
import "./NavButton.scss";
import { Link } from "react-router-dom";
import { toggleMainMenu } from "../../../redux/UI/uiActions";
import { connect } from "react-redux";

const NavButton = props => {
  return (
    <Link to={props.url} onClick={props.toggleMainMenu}>
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

const mapDispatchToProps = dispatch => ({
  toggleMainMenu: () => dispatch(toggleMainMenu)
});

export default connect(null, mapDispatchToProps)(NavButton);
