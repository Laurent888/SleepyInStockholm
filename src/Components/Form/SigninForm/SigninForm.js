import React, { useState } from "react";
import "./SigninForm.scss";
import { auth } from "../../../firebase/firebase";
import LargeButton from "../../Buttons/LargeButton/LargeButton";
import ButtonGoogle from "../../Buttons/ButtonGoogle/ButtonGoogle";
import FormInput from "../FormInput/FormInput";

const SigninForm = () => {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    const email = signin.email;
    const password = signin.password;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSignin({ email: "", password: "", password2: "" });
      })
      .catch(err => console.log(err));
  };

  const handleChangeInput = e => {
    setSignin({
      ...signin,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signin-form">
      <h1 className="l-heading">Log in</h1>
      <form className="form-signin" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email Address"
          value={signin.email}
          handleChangeInput={handleChangeInput}
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          value={signin.password}
          handleChangeInput={handleChangeInput}
        />
        <div className="mt-2">
          <LargeButton label="Log in" type="submit" />
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
