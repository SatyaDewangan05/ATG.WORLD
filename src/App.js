import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Createaccount from "./components/Createaccount";
import Login from "./components/Login";

const Signin = () => {
  const login = document.querySelector(".login-id");

  login.innerHTML = `<div className="article-post-user" style="display: flex; flex-direction: row; align-items: center;">
    <img src="https://d.newsweek.com/en/full/1849300/brandi-love.jpg?w=1600&h=1600&q=88&f=8aa38a5aa2391d0927cc6579593a47a8" height="48px" width="48px" style="border-radius: 50%; margin-right: 20px;" alt="user" />
    <h4>Brandi Brandston</h4>
    </div>`;

  const join = document.querySelector(".join-btn");
  join.style.backgroundColor = "white";
  join.style.color = "black";
  join.style.border = "1px solid black";
  join.innerHTML = `<i class="fa-solid fa-arrow-right-from-bracket"></i> Leave Group`;

  const createAccountFunc = document.querySelector(".createAccount-container");
  const loginFunc = document.querySelector(".login-container");
  createAccountFunc.classList.add("hide");
  loginFunc.classList.add("hide");
  const joinBtn = document.querySelector(".join-btn-mobile");
  joinBtn.innerHTML = "Leave Group";
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Createaccount signin={Signin} />
      <Login signin={Signin} />
      <Hero />
      <Article />
    </div>
  );
}

export default App;
