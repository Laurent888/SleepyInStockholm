import React from "react";
import "./SigninPage.scss";
import SigninForm from "../../../Components/Form/SigninForm/SigninForm";

const SigninPage = () => {
  return (
    <div className="signin-page">
      <SigninForm />
      <div className="test-credential">
        <h3>Test credential</h3>
        <p>
          You can create or use your own login. You can also use this
          credential:
        </p>
        <p>
          <span>email: </span>johndoe@test.com
        </p>
        <p>
          <span>password: </span>123123
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
