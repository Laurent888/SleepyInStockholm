import React from "react";
import "./FormInput.scss";

const FormInput = props => {
  const { value, handleChangeInput, label, name, type } = props;
  return (
    <div className="form-group">
      <input
        className={`form-group_input ${value !== "" ? "not-empty" : "empty"}`}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChangeInput}
        autoComplete={
          type === "email"
            ? "username"
            : type === "password"
            ? "new-password"
            : null
        }
        required
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default FormInput;
