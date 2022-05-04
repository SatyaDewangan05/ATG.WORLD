import React from "react";

import "./Article.css";

import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";

const Article = () => {
  return (
    <div className="article-container">
      <div className="article">
        <div className="article-nav">
          <div className="article-nav-desktop">
            <ul className="article-nav-left">
              <li className="article-nav-item active">
                <p>All Posts(32)</p>
              </li>
              <li className="article-nav-item">
                <p>Article</p>
              </li>
              <li className="article-nav-item">
                <p>Event</p>
              </li>
              <li className="article-nav-item">
                <p>Education</p>
              </li>
              <li className="article-nav-item">
                <p>Job</p>
              </li>
            </ul>
            <div className="article-nav-right">
              <button className="write-btn">
                Write a Post <i className="fa-solid fa-caret-down"></i>
              </button>
              <button className="join-btn">
                <i className="fa-solid fa-user-plus"></i> Join Group
              </button>
            </div>
          </div>
          <div className="article-nav-mobile">
            <div className="post">Post(360)</div>
            <div className="filter-btn">
              Filter:All <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div className="article-content">
          <div className="article-content-container">
            <div className="article-posts">
              <Article1 />
              <Article2 />
              <Article3 />
              <Article4 />
            </div>
          </div>
          <div className="article-detail">
            <div className="article-location">
              <i className="fa-solid fa-location-dot"></i>
              <p>Noida, India</p>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="flex">
              <i className="fa-solid fa-circle-exclamation"></i>
              <p>
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
            <div className="groups">
              <h3>
                <i className="fa-solid fa-thumbs-up"></i>
                RECOMMENDED GROUPS
              </h3>
              <div className="group flex">
                <div className="group-head flex">
                  <img src={require("../image/user1.jpg")} alt="user" />
                  <p>Leisure</p>
                </div>
                <button
                  className="follow-btn"
                  onClick={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "white";
                  }}
                >
                  Follow
                </button>
              </div>
              <div className="group flex">
                <div className="group-head flex">
                  <img src={require("../image/user2.jfif")} alt="user" />
                  <p>Activism</p>
                </div>
                <button
                  className="follow-btn"
                  onClick={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "white";
                  }}
                >
                  Follow
                </button>
              </div>
              <div className="group flex">
                <div className="group-head flex">
                  <img src={require("../image/user3.jfif")} alt="user" />
                  <p>MBA</p>
                </div>
                <button
                  className="follow-btn"
                  onClick={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "white";
                  }}
                >
                  Follow
                </button>
              </div>
              <div className="group flex">
                <div className="group-head flex">
                  <img src={require("../image/user4.jfif")} alt="user" />
                  <p>Philosophy</p>
                </div>
                <button
                  className="follow-btn"
                  onClick={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "white";
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
