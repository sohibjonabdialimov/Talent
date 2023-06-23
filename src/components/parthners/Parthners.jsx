import React from "react";
import "./parthners.css";
import group from "../../assets/img/group.svg";
const Parthners = () => {
  return (
    <>
      <div className="parthners">
        <h2 className="section_title">Our Blog</h2>
        <p className="section_subtitle">
        We cooperate with various companies, including
        </p>
        <img src={group} alt="" />
      </div>
    </>
  );
};

export default Parthners;
