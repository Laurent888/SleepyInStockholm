import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import logo from "../../img/logo.png";

const Logo = ({ clicked, mainMenuOpen }) => {
  return (
    <Fragment>
      <Link className="logo large-width" to="/">
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
      <div className="logo small-width" onClick={clicked}>
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
        <span className={`mdi mdi-chevron-down ${mainMenuOpen && "up"}`} />
      </div>
    </Fragment>
  );
};

export default Logo;
