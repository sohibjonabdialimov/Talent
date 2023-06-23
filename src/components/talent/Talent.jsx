import React from "react";
import "./talent.css";
import talent1 from "../../assets/img/talent1.svg";
import talent2 from "../../assets/img/talent2.svg";
import talent3 from "../../assets/img/talent3.svg";
import talent4 from "../../assets/img/talent4.svg";
import talent5 from "../../assets/img/talent5.svg";
import talent6 from "../../assets/img/talent6.svg";
import card1 from "../../assets/img/card1.png";
import card2 from "../../assets/img/card2.png";
import card3 from "../../assets/img/card3.png";
const Talent = () => {
  return (
    <>
      <div className="talent">
        <h2 className="talent_title">Pass the test and get hired</h2>
        <div className="talent_content">
          <div className="talent_card_wrap">
            <div className="talent_content_card">
              <img src={talent1} alt="" />
              <div className="talent_card_content">
                <h4>find out your level in IT</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </p>
              </div>
            </div>
            <div className="talent_content_card">
              <img src={talent2} alt="" />
              <div className="talent_card_content">
                <h4>create your portfolio</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
              </div>
            </div>
            <div className="talent_content_card">
              <img src={talent3} alt="" />
              <div className="talent_card_content">
                <h4>become the best IT specialist find</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </p>
              </div>
            </div>
            <div className="talent_content_card">
              <img src={talent4} alt="" />
              <div className="talent_card_content">
                <h4>improve your soft skills</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </p>
              </div>
            </div>
            <div className="talent_content_card">
              <img src={talent5} alt="" />
              <div className="talent_card_content">
                <h4>find a dream job</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </p>
              </div>
            </div>
            <div className="talent_content_card">
              <img src={talent6} alt="" />
              <div className="talent_card_content">
                <h4>increase your income</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </p>
              </div>
            </div>
          </div>
          <div className="talent_imgs">
            <p className="talent_imgs_subtitle">
              Become
            </p>
            <h2>the best Uzbek Talent</h2>
            <div className="talent_imgs_wrap">
              <img src={card1} alt="" />
              <img src={card2} alt="" />
              <img src={card3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Talent;
