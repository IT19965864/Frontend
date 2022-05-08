import React, { useState } from "react";
import "../styles/login.css";
import profile from "../images/a.png";
import timetableService from "../adapters/timetableService";
import { confirmAlert } from "react-confirm-alert";
import SoloAlert from "soloalert";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function addLogin() {
    try {
      if (!email || !password) {
        confirmAlert({
          title: "all feilds are required",
          buttons: [
            {
              label: "OK",
              onClick: () => {
                window.location = "/";
              },
            },
          ],
        });
      } else {
        const data = {
          email,
          password,
        };
        timetableService.insertLogin(data).then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            if (res.data.status.role === "timetableAdministrator") {
              window.location = "/addTimetable";
            } else if (res.data.status.role === "teacherAdministrator") {
              window.location = "/TeacherAdminProfile";
            } else if (res.data.status.role === "studentAdministrator") {
              window.location = "/viewStudent";
            } else if (res.data.status.role === "resultsAdministrator") {
              window.location = "/viewMarks";
            }
          } else {
            SoloAlert.alert({
              title: "Welcome!",
              body: "username or password is incorrect",
              icon: "error",
              theme: "dark",
              useTransparency: true,
              onOk: function () {},
            });
          }
        });
      }
    } catch (e) {
      alert("aa");
    }
  }
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
              <input
                type="text"
                placeholder="User name"
                className="name"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="second-input">
              <input
                type="password"
                placeholder="Password"
                className="name"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="login-button">
              <button onClick={addLogin}>Login</button>
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
