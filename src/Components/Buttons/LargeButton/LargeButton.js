import React from "react";
import "./LargeButton.scss";

const LargeButton = props => {
  return (
    <button
      className="large-btn"
      onClick={props.clicked}
      type={props.type}
      disabled={props.disabled}
    >
      {props.disabled ? "Choose dates" : `${props.label}`}
    </button>
  );
};

export default LargeButton;
