import React from "react";
import "./blog.css";
import extra from "../../assets/img/extra.svg";
import blog1 from "../../assets/img/blog1.png";
import blog2 from "../../assets/img/blog2.png";
const Blog = () => {
  return (
    <>
      <div className="blog">
        <h2 className="section_title">Our Blog</h2>
        <p className="section_subtitle">
          Our ecosystem is comprised of talented IT professionals and Software
          Developers who are passionate about technology.
        </p>
        <div className="blog_cards">
          <div className="blog_card">
            <div className="blog_img">
              <img src={blog1} alt="" />
              <span className="span1">Startup</span>
            </div>
            <div className="blog_desc">
              <p>
                Set on a practical project based training model with the ourpose
                of improving the skills of Software Developers and
              </p>
              <div className="blog_btn1">
                <button>Learn More</button>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div className="blog_card">
            <div className="blog_img">
              <img src={blog2} alt="" />
              <span className="span2">Taining</span>
            </div>
            <div className="blog_desc">
              <p>
                Set on a practical project based training model with the ourpose
                of improving the skills of Software Developers and
              </p>
              <div className="blog_btn2">
                <button>Learn More</button>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div className="blog_card">
            <div className="blog_img">
              <img src={blog1} alt="" />
              <span className="span3">Marketplace</span>
            </div>
            <div className="blog_desc">
              <p>
                Set on a practical project based training model with the ourpose
                of improving the skills of Software Developers and
              </p>
              <div className="blog_btn3">
                <button>Learn More</button>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </div>
            </div>
            <img className="blog_extra_img" src={extra} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
