import React, { useState } from "react";
import "./SignupForm.scss";
import { auth } from "../../../firebase/firebase";
import LargeButton from "../../Buttons/LargeButton/LargeButton";
import ButtonGoogle from "../../Buttons/ButtonGoogle/ButtonGoogle";
import FormInput from "../FormInput/FormInput";

const SignupForm = () => {
  const [signup, setSignup] = useState({
    email: "",
    username: "",
    password: "",
    password2: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    const username = signup.username;
    const email = signup.email;
    const password = signup.password;
    if (signup.password === signup.password2) {
      auth
        .createUserWithEmailAndPassword(email, password)

        .then(() => {
          setSignup({ email: "", password: "", password2: "", username: "" });
        })
        .then(() => {
          auth.currentUser.updateProfile({ displayName: username });
        })
        .catch(err => console.log(err));
    } else {
      console.log("Passwords dont match");
    }
  };

  const handleChangeInput = e => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signup-form">
      <h1 className="l-heading">Sign up today !</h1>
      <form className="form-signup" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          label="Choose a username"
          value={signup.username}
          handleChangeInput={handleChangeInput}
        />
        <FormInput
          type="email"
          name="email"
          label="Email Address"
          value={signup.email}
          handleChangeInput={handleChangeInput}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={signup.password}
          handleChangeInput={handleChangeInput}
        />
        <FormInput
          type="password"
          name="password2"
          label="Confirm password"
          value={signup.password2}
          handleChangeInput={handleChangeInput}
        />
        <div className="mt-2">
          <LargeButton label="Sign up !" type="submit" />
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
