import React from "react";
import "./Logo.scss";
import logo from "../../img/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="logo"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
};

export default Logo;
