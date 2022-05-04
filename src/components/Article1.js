import React from "react";

const Article1 = () => {
  return (
    <div className="article">
      <div className="article-post">
        <div className="article-post-image">
          <img src={require("../image/post1.jpg")} alt="user" />
        </div>
        <div className="article-post-content">
          <div className="article-post-title">
            <i class="fa-solid fa-file-pen"></i>
            <p>Article</p>
          </div>
          <div className="article-post-head">
            <h3>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
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
              <img src={require("../image/user1.jpg")} alt="user" />
              <h4>Brandi Brandston</h4>
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

export default Article1;
