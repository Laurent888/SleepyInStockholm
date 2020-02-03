import React from "react";
import "./Navbar.scss";
import Logo from "../../Components/Logo/Logo";
import NavButton from "../../Components/Buttons/NavButton/NavButton";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Logo />
        <div className="ml-2">
          <SearchBar />
        </div>
      </div>

      <ul className="navbar_list">
        <li>
          <NavButton label="Become a host" />
        </li>
        <li>
          <NavButton label="Sign up" />
        </li>
        <li>
          <NavButton label="Sign in" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
