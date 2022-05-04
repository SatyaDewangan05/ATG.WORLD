import React from "react";

import "./Createaccount.css";

const removeCreateAccount = () => {
  const createAccountFunc = document.querySelector(".createAccount-container");
  createAccountFunc.classList.add("hide");
};

const loginPage = () => {
  const loginPageFunc = document.querySelector(".login-container");
  loginPageFunc.classList.remove("hide");
  removeCreateAccount();
  console.log("login");
};

// const btn = document.querySelector(".createAccount-btn");

const CreateAccount = ({ signin }) => {
  return (
    <div className="createAccount-container hide">
      <div className="createAccount">
        <div
          className="cross"
          onClick={() => {
            removeCreateAccount();
          }}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="createAccount-head">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="createAccount-system">
          <div className="create-account col">
            <h1>Create Account</h1>
            <form className="form">
              <div className="form-input">
                <div className="row-1">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="Email" placeholder="Email" />
                <input type="Password" placeholder="Password" />
                <input type="Password" placeholder="Confirm Password" />
              </div>

              <div className="auth">
                <button
                  className="create-btn createAccount-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    signin();
                  }}
                >
                  Create Account
                </button>
                <p
                  className="auth-p"
                  onClick={() => {
                    loginPage();
                  }}
                >
                  or, Sign In
                </p>
              </div>
              <button
                className="signup-btn createAccount-btn"
                onClick={(e) => {
                  e.preventDefault();
                  signin();
                }}
              >
                <img src={require("../image/facebook.png")} alt="Facebook" />{" "}
                Sign Up with Facebook
              </button>
              <button
                className="signup-btn createAccount-btn"
                onClick={(e) => {
                  e.preventDefault();
                  signin();
                }}
              >
                <img src={require("../image/google.png")} alt="Google" />
                Sign Up with Google
              </button>
            </form>
            <p style={{ fontSize: "11px", textAlign: "center" }}>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
          <div className="createAccount-image col">
            <p className="createAccount-stat">
              Already have an account?{" "}
              <span
                className="signin"
                onClick={() => {
                  loginPage();
                }}
              >
                Sign In
              </span>
            </p>
            <img src={require("../image/group3.png")} alt="logo" />
            <p style={{ fontSize: "11px" }}>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
