import React from "react";
import "./OptionSection.scss";

const OptionSection = props => {
  console.log(Object.keys(props.options));
  const options = Object.keys(props.options).map(item => {
    return props.options[item] === "yes" ? <p key={item}>{item}</p> : null;
  });

  return (
    <div className="optionSection">
      <h3 className="optionSection_title">{props.title}</h3>
      <div className="optionSection_grid">
        <ul>{options}</ul>
      </div>
    </div>
  );
};

export default OptionSection;
