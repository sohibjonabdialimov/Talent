import React from "react";
import "./experience.css";
import ok1 from "../../assets/img/ok1.svg";
import ok2 from "../../assets/img/ok2.svg";
import ok3 from "../../assets/img/ok3.svg";
import ok4 from "../../assets/img/ok4.svg";
import ok5 from "../../assets/img/ok5.svg";
import extra from "../../assets/img/extra.svg";
const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience_content">
          <h2>Industries Experience</h2>
          <p>The scope of our industry experience across multiple markets combined with proven talent expertise fuels.</p>
        </div>
        <div className="experience_cards">
          <div className="experience_card">
            <img src={ok1} alt="" />
            <h4>Fintech</h4>
            <p>Lorem ipsum dolor sit amet. consectur adipiscing.</p>
          </div>
          <div className="experience_card">
            <img src={ok2} alt="" />
            <h4>Fintech</h4>
            <p>Lorem ipsum dolor sit amet. consectur adipiscing.</p>
          </div>
          <div className="experience_card">
            <img src={ok3} alt="" />
            <h4>Fintech</h4>
            <p>Lorem ipsum dolor sit amet. consectur adipiscing.</p>
          </div>
          <div className="experience_card">
            <img src={ok4} alt="" />
            <h4>Fintech</h4>
            <p>Lorem ipsum dolor sit amet. consectur adipiscing.</p>
          </div>
          <div className="experience_card">
            <img src={ok5} alt="" />
            <h4>Fintech</h4>
            <p>Lorem ipsum dolor sit amet. consectur adipiscing.</p>
          </div>
          <div className="experience_card">
            <img src={ok1} alt="" />
            <h4>Fintech</h4>
            <p>Lorem ipsum dolor sit amet. consectur adipiscing.</p>
          </div>
        </div>
        <img className="extra_img1" src={extra} alt="" />
      </div>
    </>
  );
};

export default Experience;
