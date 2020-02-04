import React from "react";
import "./Backdrop.scss";

const Backdrop = () => {
  return (
    <div
      className="backdrop"
      onClick={() => console.log("Close the backdropt")}
    ></div>
  );
};

export default Backdrop;
