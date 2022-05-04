import React from "react";

import "./Login.css";
import "./Navbar";

const remove = () => {
  const loginFunc = document.querySelector(".login-container");
  loginFunc.classList.add("hide");
};

const createAccountPage = () => {
  const createAccountPageFunc = document.querySelector(
    ".createAccount-container"
  );
  createAccountPageFunc.classList.remove("hide");
  remove();
  console.log("create account");
};

const Login = ({ signin }) => {
  return (
    <div className="login-container hide">
      <div className="createAccount">
        <div
          className="cross"
          onClick={() => {
            remove();
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
            <h1>Sign In</h1>
            <form className="form">
              <div className="form-input">
                <input type="Email" placeholder="Email" />
                <input type="Password" placeholder="Password" />
              </div>
              <div className="auth">
                <button
                  className="create-btn createAccount"
                  onClick={(e) => {
                    e.preventDefault();
                    signin();
                  }}
                >
                  Sign In
                </button>
                <p
                  className="auth-p"
                  onClick={() => {
                    createAccountPage();
                  }}
                >
                  or, Create Account
                </p>
              </div>
              <button
                className="signup-btn createAccount"
                onClick={(e) => {
                  e.preventDefault();
                  signin();
                }}
              >
                <img src={require("../image/facebook.png")} alt="Facebook" />{" "}
                Sign In with Facebook
              </button>
              <button
                className="signup-btn createAccount"
                onClick={(e) => {
                  e.preventDefault();
                  signin();
                }}
              >
                <img src={require("../image/google.png")} alt="Google" />
                Sign In with Google
              </button>
              <p className="forget">Forget Password?</p>
            </form>
          </div>
          <div className="createAccount-image col">
            <p className="createAccount-stat">
              Don't have an account yet?{" "}
              <span
                className="signin"
                onClick={() => {
                  createAccountPage();
                }}
              >
                Create new for free!
              </span>
            </p>
            <img src={require("../image/group3.png")} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
