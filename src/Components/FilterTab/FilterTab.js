import React from "react";
import "./FilterTab.scss";
import FormFilterCheckbox from "../../Components/Form/FormFilterCheckbox/FormFilterCheckbox";

const FilterTab = props => {
  return (
    <div className="filter-tab">
      <h3>Filter by {props.label}</h3>
      {props.filterType === "typeRoom" ? <FormFilterCheckbox /> : null}
    </div>
  );
};

export default FilterTab;
