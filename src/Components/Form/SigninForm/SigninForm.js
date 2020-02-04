import React, { useState } from "react";
import "./SigninForm.scss";
import LargeButton from "../../Buttons/LargeButton/LargeButton";
import ButtonGoogle from "../../Buttons/ButtonGoogle/ButtonGoogle";

const SigninForm = () => {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const handleChangeInput = e => {
    setSignin({
      ...signin,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signin-form">
      <h1 className="l-heading">Log in</h1>
      <form className="form-signin" onSubmit={() => console.log("Submitted")}>
        <div className="form-group">
          <input
            className={`form-group_input ${
              signin.email !== "" ? "not-empty" : "empty"
            }`}
            type="email"
            name="email"
            id="email"
            value={signin.email}
            onChange={handleChangeInput}
            autoComplete="username"
            required
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-group">
          <input
            className={`form-group_input ${
              signin.password !== "" ? "not-empty" : "empty"
            }`}
            type="password"
            name="password"
            id="password"
            value={signin.password}
            onChange={handleChangeInput}
            autoComplete="new-password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="mt-2">
          <LargeButton label="Log in" />
        </div>
        <div className="google mt-2">
          or
          <ButtonGoogle label="Sign in with Google" />
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
