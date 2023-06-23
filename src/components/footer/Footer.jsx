import React from "react";
import "./footer.css";
import logo from "../../assets/img/footer_logo.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_content">
          <div className="footer_wrap">
            <div className="footer_subscribe">
              <img src={logo} alt="" />
              <p>
                <b>Subcribe</b>, to Our Newsletter to get important News,
                Amazing Offers & Inside Scoops:
              </p>
              <div className="subscribe_wrap">
                <input placeholder="Enter your email" type="text" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="footer_navigation">
              <h4>Navigation</h4>
              <p>Main page</p>
              <p>About us</p>
              <p>For companies</p>
              <p>For individuals</p>
              <p>Contact</p>
              <p>Blog</p>
            </div>
            <div className="footer_adress">
              <h4>Adress</h4>
              <p>
                Adress Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the.
              </p>
              <div className="social_icons">
                <div className="icon">
                  <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <div className="icon">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div className="icon">
                  <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <div className="icon">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div className="icon">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
              </div>
              <div className="addvertise">
                <span>Terms</span>
                <span>Privacy</span>
                <span>Policy</span>
              </div>
            </div>
          </div>
          <p className="copy_right">&copy; Copyright 2023 - ITIC</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
