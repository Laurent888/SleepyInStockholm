import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import logo from "../../img/logo.png";

const Logo = () => {
  return (
    <Link className="logo" to="/">
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
    </Link>
  );
};

export default Logo;
