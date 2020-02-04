import React from "react";
import "./LargeButton.scss";

const LargeButton = props => {
  return (
    <div className="large-btn" onClick={props.clicked}>
      {props.label}
    </div>
  );
};

export default LargeButton;
