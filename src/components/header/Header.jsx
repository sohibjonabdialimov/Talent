import React from "react";
import "./header.css";
import logo from "../../assets/img/header_logo.svg";
const Header = () => {
  return (
    <div className="header">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <nav>
        <ul className="main_nav">
          <li>
            <select>
              <option selected disabled hidden value="">
                About us
              </option>
              <option value="">Item 1</option>
              <option value="">Item 2</option>
              <option value="">Item 3</option>
              <option value="">Item 4</option>
            </select>
          </li>
          <li>
            <a href="#">
            For companies
            </a>
          </li>
          <li>
            <a href="#">
            For individuals
            </a>
          </li>
        </ul>
        <ul className="login_nav">
          <li className="nav_login">
            <button>Login</button>
          </li>
          <li className="nav_sign_up">
            <button>Sign up</button>
          </li>
          <li className="nav_lang">
            <button>En</button>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Header;
