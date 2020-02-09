import React, { Fragment } from "react";
import "./Navbar.scss";
import Logo from "../../Components/Logo/Logo";
import NavButton from "../../Components/Buttons/NavButton/NavButton";
import LogoutButton from "../../Components/Buttons/NavButton/LogoutButton";
import { connect } from "react-redux";
import { toggleMainMenu } from "../../redux/UI/uiActions";

const Navbar = ({ currentUser, toggleMainMenu, mainMenuOpen }) => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Logo clicked={toggleMainMenu} mainMenuOpen={mainMenuOpen} />
      </div>

      <ul className={`navbar_list ${mainMenuOpen ? "show" : null}`}>
        {currentUser && (
          <li className="nav-btn_label name">
            Hello {currentUser.displayName} !
          </li>
        )}
        <li className="link-homepage">
          <NavButton label="Homepage" url="/" />
          <span className="mdi mdi-home icon-menu" />
        </li>
        <li>
          <NavButton label="Homes" url="/homes" />
          <span className="mdi mdi-hotel icon-menu" />
        </li>
        {currentUser ? (
          <Fragment>
            <li>
              <NavButton label="Profile" url={`/profile/${currentUser.uid}`} />
              <span className="mdi mdi-account icon-menu" />
            </li>
            <li>
              <LogoutButton />
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <NavButton label="Sign up" url="/signup" />
              <span className="mdi mdi-clipboard-account icon-menu" />
            </li>
            <li>
              <NavButton label="Sign in" url="/signin" />
              <span className="mdi mdi-login icon-menu" />
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser.userInfo,
  mainMenuOpen: state.ui.mainMenuOpen
});

const mapDispatchToProps = dispatch => ({
  toggleMainMenu: () => dispatch(toggleMainMenu)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
