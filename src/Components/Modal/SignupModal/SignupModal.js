import React, { useState } from "react";
import "./SignupModal.scss";
import Backdrop from "../Backdrop/Backdrop";

const SignupModal = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const handleChangeUser = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="signup-modal">
      <Backdrop />
      <div className="form-container">
        <button class="form-signup" onSubmit={() => console.log("Submitted")}>
          <label for="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChangeUser}
            required
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            required
          />
          <label for="password2">Confirm password</label>
          <input
            type="password2"
            name="password2"
            id="password2"
            value={user.password2}
            required
          />
          <button class="btn-submit">Sign up !</button>
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
