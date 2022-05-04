import React from "react";

const Article2 = () => {
  return (
    <div className="article">
      <div className="article-post">
        <div className="article-post-image">
          <img src={require("../image/post2.png")} alt="user" />
        </div>
        <div className="article-post-content">
          <div className="article-post-title">
            <i class="fa-solid fa-microscope"></i>
            <p>Education</p>
          </div>
          <div className="article-post-head">
            <h3>
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h3>
            <button className="detail-btn">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <div className="article-post-desc">
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
          </div>
          <div className="article-post-profile">
            <div className="article-post-user">
              <img src={require("../image/user2.jfif")} alt="user" />
              <h4>Sarah West</h4>
            </div>
            <div className="article-post-views">
              <i class="fa-solid fa-eye"></i>
              <p>1.4k views</p>
              <button className="share-btn">
                <i class="fa-solid fa-share-nodes"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article2;
