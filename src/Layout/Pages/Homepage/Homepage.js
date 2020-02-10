import React from "react";
import "./Homepage.scss";
import hero1 from "../../../img/hero1.jpg";
import hero2 from "../../../img/hero2.jpg";
import hero3 from "../../../img/hero3.jpg";
import hero4 from "../../../img/hero4.jpg";
import hero5 from "../../../img/hero5.jpg";
import LargeButton from "../../../Components/Buttons/LargeButton/LargeButton";
import { Link } from "react-router-dom";

const Homepage = () => {
  const backgroundImage = [hero1, hero2, hero3, hero4, hero5];
  const randomImage = backgroundImage[Math.floor(Math.random() * 5)];

  return (
    <div className="homepage">
      <div className="homepage_container">
        <div className="homepage_image">
          <img src={randomImage} alt="background" />
        </div>
        <div className="homepage_content">
          <div className="homepage_content_text">
            <h1>Welcome to Sleeping in Stockholm</h1>
            <Link to="/homes">
              {" "}
              <LargeButton label="Explore our homes" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
