import React, { useState } from "react";
import "./SignupForm.scss";
import LargeButton from "../../Buttons/LargeButton/LargeButton";
import ButtonGoogle from "../../Buttons/ButtonGoogle/ButtonGoogle";

const SignupForm = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const handleChangeInput = e => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signup-form">
      <h1 className="l-heading">Sign up today !</h1>
      <form className="form-signup" onSubmit={() => console.log("Submitted")}>
        <div className="form-group">
          <input
            className={`form-group_input ${
              signup.email !== "" ? "not-empty" : "empty"
            }`}
            type="email"
            name="email"
            id="email"
            value={signup.email}
            onChange={handleChangeInput}
            autoComplete="username"
            required
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-group">
          <input
            className={`form-group_input ${
              signup.password !== "" ? "not-empty" : "empty"
            }`}
            type="password"
            name="password"
            id="password"
            value={signup.password}
            onChange={handleChangeInput}
            autoComplete="new-password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-group">
          <input
            className={`form-group_input ${
              signup.password2 !== "" ? "not-empty" : "empty"
            }`}
            type="password2"
            name="password2"
            id="password2"
            value={signup.password2}
            onChange={handleChangeInput}
            autoComplete="new-password"
            required
          />
          <label htmlFor="password2">Confirm password</label>
        </div>
        <div className="mt-2">
          <LargeButton label="Sign up !" />
        </div>
        <div className="google mt-2">
          or
          <ButtonGoogle label="Sign in with Google" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
