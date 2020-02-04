import React from "react";
import "./OptionSection.scss";

const OptionSection = props => {
  const options = Object.keys(props.options).map(item => {
    // Define the icon for each option.
    let icon = "";
    switch (item) {
      case "wifi":
        icon = "wifi";
        break;
      case "dryer":
        icon = "tumble-dryer";
        break;
      case "kitchen":
        icon = "silverware-fork-knife";
        break;
      case "tv":
        icon = "television-classic";
        break;
      case "washer":
        icon = "dishwasher";
        break;
      case "pets":
        icon = "dog-side";
        break;
      case "smoking":
        icon = "smoking";
        break;
      case "parties":
        icon = "party-popper";
        break;
      default:
        icon = "";
    }
    return props.options[item] === "yes" ? (
      <li key={item}>
        <div>
          <span className={`mdi mdi-${icon}`}></span>
          {item}
        </div>
      </li>
    ) : null;
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
