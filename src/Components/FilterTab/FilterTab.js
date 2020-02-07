import React from "react";
import "./FilterTab.scss";
import FormFilterCheckbox from "../Form/FormFilterCheckbox/FormFilterCheckbox";
import FormFilterPrice from "../Form/FormFilterPrice/FormFilterPrice";

const FilterTab = props => {
  return (
    <div className="filter-tab">
      <h3 className="filter-tab_title">{props.label}</h3>
      {props.filterType === "typeRoom" ? (
        <FormFilterCheckbox />
      ) : (
        <FormFilterPrice />
      )}
    </div>
  );
};

export default FilterTab;
