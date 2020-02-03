import React from "react";
import "./HeroSinglePage.scss";

const HeroSinglePage = props => {
  return (
    <div className="heroSingle">
      <div className="heroSingle_grid">
        <div className="image-1">
          <img src={props.images[0]} alt="" />
        </div>
        <div className="image-2">
          <img src={props.images[1]} alt="" />
        </div>
        <div className="image-3">
          <img src={props.images[2]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSinglePage;
