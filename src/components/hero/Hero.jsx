import React from "react";
import hero1 from "../../assets/img/hero.png";
import absolute from "../../assets/img/absolute.svg";
import extra from "../../assets/img/extra.svg";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1>
          The potential of IT could lead to a better and overall smarter future
          for everyone
        </h1>
        <p>
          We strive for excellence in the growing world of talent and we hire,
          curate, and cultivate talent in Uzbekistan
        </p>
        <button>Learn</button>
      </div>
      <div className="hero_imgs">
        <img src={hero1} alt="" />
        <div className="absolute_img">
          <img src={absolute} alt="" />
          <div className="absolute_text">
            <p>Hire</p>
            <p>Curate</p>
            <p>Cultivate</p>
          </div>
        </div>
      </div>

      <img className="hero_extra_img" src={extra} alt="" />
    </div>
  );
};

export default Hero;
