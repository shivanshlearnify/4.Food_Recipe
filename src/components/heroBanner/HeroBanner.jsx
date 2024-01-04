import React from "react";
import backgroundImage1 from "../../assets/bg1.jpg";
import backgroundImage2 from "../../assets/bg2.jpg";
import backgroundImage3 from "../../assets/bg3.jpg";
import backgroundImage4 from "../../assets/bg4.jpg";
import backgroundImage5 from "../../assets/bg5.jpg";
import backgroundImage6 from "../../assets/bg6.jpg";
import backgroundImage7 from "../../assets/bg7.jpg";
import backgroundImage8 from "../../assets/bg8.jpg";
import backgroundImage9 from "../../assets/bg9.jpg";
import backgroundImage10 from "../../assets/bg10.jpg";
import "./style.css";

const HeroBanner = () => {
  let imgArr = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
    backgroundImage6,
    backgroundImage7,
    backgroundImage8,
    backgroundImage9,
    backgroundImage10,
  ];
  return (
    <div className="maincontainer">
      <div
        className="container"
        style={{
          backgroundImage: `url(${imgArr[Math.floor(Math.random() * 10)]})`,
        }}
      >
        <div className="heroBannercontext">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Explore and discover a diverse array of food recipes to try out now.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
