import React from "react";

const Article4 = () => {
  return (
    <div className="article">
      <div className="article-post">
        <div className="article-post-image">
          <img src={require("../image/post4.jfif")} alt="user" />
        </div>
        <div className="article-post-content">
          <div className="article-post-title">
            <i className="fa-solid fa-briefcase"></i>
            <p>Job</p>
          </div>
          <div className="article-post-head">
            <h3>Software Developer</h3>
            <button className="detail-btn">
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <div className="article-post-desc">
            <div className="schedule sub-desc">
              <i className="fa-solid fa-calendar"></i>
              <p>Fri, 12 Oct, 2018</p>
            </div>
            <div className="location sub-desc">
              <i className="fa-solid fa-location-dot"></i>
              <p>Ahmedabad, India</p>
            </div>
          </div>
          <div className="article-link">
            <button className="article-link-btn" style={{ color: "green" }}>
              Apply on TimesJobs
            </button>
          </div>
          <div className="article-post-profile">
            <div className="article-post-user">
              <img src={require("../image/user4.jfif")} alt="user" />
              <h4>Jane Froster</h4>
            </div>
            <div className="article-post-views">
              <i className="fa-solid fa-eye"></i>
              <p>1.4k views</p>
              <button className="share-btn">
                <i className="fa-solid fa-share-nodes"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article4;
