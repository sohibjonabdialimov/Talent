import React from "react";
import "./specialist.css";
const Specialist = () => {
  return (
    <>
      <div className="specialist">
        <h2 className="specialist_title">Hire a specialist</h2>
        <p className="specialist_subtitle">
          Type in the name of the position, company or job category you are
          looking for
        </p>
        <div className="specialist_search">
          <div className="specialist_category">
            <div className="specialist_img">
              <ion-icon name="bag-handle-outline"></ion-icon>
            </div>
            <p>Category</p>
          </div>
          <div className="specialist_input">
            <input type="text" placeholder="Search skill..." />
            <button>
              <ion-icon name="search-outline"></ion-icon>
              Search
            </button>
          </div>
        </div>
        <p className="specialist_choose">or Choose ...</p>
        <div className="specialist_cards">
          <div className="first">
            <div className="specialist_card">
              <p>Full Stack Developer</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>UI/UX Designer</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>IOS Developer</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>Web Developer</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>Copywriter</p>
              <span>324</span>
            </div>
          </div>
          <div className="second">
            <div className="specialist_card">
              <p>Graphic Designer</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>Illustrator</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>Video Editor</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>Front End Dev</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>3D Modeler</p>
              <span>324</span>
            </div>
          </div>
          <div className="third">
            <div className="specialist_card">
              <p>Officer</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>Content Creator</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>Translator</p>
              <span>324</span>
            </div>
            <div className="specialist_card">
              <p>Java Developer</p>
              <span>324</span>
            </div>
          </div>
        </div>
        <div className="specialist_more">
          <button>
            More categories 
          </button>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </>
  );
};

export default Specialist;
