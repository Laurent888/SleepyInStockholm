import React, { Fragment } from "react";
import "./Navbar.scss";
import Logo from "../../Components/Logo/Logo";
import NavButton from "../../Components/Buttons/NavButton/NavButton";
import SearchBar from "../../Components/SearchBar/SearchBar";
import LogoutButton from "../../Components/Buttons/NavButton/LogoutButton";
import { connect } from "react-redux";

const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Logo />
        <div className="ml-2">
          <SearchBar />
        </div>
      </div>

      <ul className="navbar_list">
        {currentUser && (
          <li className="nav-btn_label name">
            Hello {currentUser.displayName} !
          </li>
        )}
        <li>
          <NavButton label="Homes" url="/homes" />
        </li>
        {currentUser ? (
          <Fragment>
            <li>
              <NavButton label="Profile" url="/profile" />
            </li>
            <li>
              <LogoutButton />
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <NavButton label="Sign up" url="/signup" />
            </li>
            <li>
              <NavButton label="Sign in" url="/signin" />
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);
