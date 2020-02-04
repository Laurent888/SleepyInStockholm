import React from "react";
import "./LargeButton.scss";

const LargeButton = props => {
  return (
    <button className="large-btn" onClick={props.clicked} type={props.type}>
      {props.label}
    </button>
  );
};

export default LargeButton;
