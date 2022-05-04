import React, { Component } from "react";
import "../styles/login.css";
import profile from "../images/a.png";

export default class login extends Component {
  render() {
    return (
      <div class="main">
        <div class="sub-main">
          <div>
            <div class="imgs">
              <div class="container-image">
                <img src={profile} alt="profile" class="profile" />
              </div>
            </div>

            <div>
              <h1>Login Page</h1>
              <div>
                <input type="text" placeholder="User name" className="name" />
              </div>
              <div className="second-input">
                <input
                  type="password"
                  placeholder="Password"
                  className="name"
                />
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>

              <p className="link">
                <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
