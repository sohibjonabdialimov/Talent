import React from "react";
import "./work.css";
import logo from "../../assets/img/header_logo.svg";
import extra from "../../assets/img/extra.svg";
const Work = () => {
  return (
    <>
      <div className="work">
        <img className="work_position_img" src={extra} alt="" />
        <div className="work_img">
          <img src={logo} alt="" />
        </div>
        <form className="work_form">
          <img className="form_position_img" src={extra} alt="" />
          <h3>Work with us</h3>
          <div className="input_wrap">
            <input type="text" placeholder="Cristiansen" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Address" name="" id="" />
          <input type="number" placeholder="Phone" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Work;
