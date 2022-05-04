import React from "react";

import "./Navbar.css";
import "./Article.js";

const change = () => {
  const groups = document.querySelector(".groups");
  groups.classList.add("visible");

  const createAccountFunc = document.querySelector(".createAccount-container");
  createAccountFunc.classList.remove("hide");
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-desktop">
        <div className="logo">
          <img src={require("../image/logo.png")} alt="logo" />
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="login-id">
          <p>
            Create account.{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                change();
              }}
            >
              It's free!{" "}
            </span>
            <i className="fa-solid fa-caret-down"></i>
          </p>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="navbar-item">
          <i class="fa-solid fa-arrow-left"></i>
          <button
            className="join-btn-mobile"
            onClick={() => {
              change();
            }}
          >
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
