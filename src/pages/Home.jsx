import React from "react";
import "../styles/Home.css";
import logo from "../img/image1.png";
import hero from "../img/image2.png";
import { Link } from "react-router-dom";
import ViewSingleTeacher from "../pages/ViewSingleTeacher";

export default function Home() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:ital,wght@0,400;0,500;0,600;1,400&display=swap"
        rel="stylesheet"
      />
      <section class="section-navigation">
        <img src={logo} alt="insitute image" className="logo" />
        <nav class="page-nav-links">
          <ul class="nav-links">
            <li>
              <Link to="/addTeacher" class="sections-links">
                section1
              </Link>
            </li>
            <li>
              <a href="#" class="sections-links">
                section2
              </a>
            </li>
            <li>
              <a href="#" class="sections-links">
                section3
              </a>
            </li>
            <li>
              <a href="#" class="sections-links">
                section4
              </a>
            </li>
            <li>
              <a href="#" class="sections-links btn">
                Login
              </a>
            </li>
          </ul>
        </nav>
        <button class="mobile-navigation-btn">
          <ion-icon
            class="mobile-navigation-icon"
            name="menu-outline"
          ></ion-icon>
          <ion-icon
            class="mobile-navigation-icon"
            name="close-outline"
          ></ion-icon>
        </button>
        {/* <!-- <div class="sighn-up">
      <button class="sighn-up-btn btn">Try for free</button>
    </div> --> */}
      </section>
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="hero-header">
              A healthy meal delivered to your door, every single day
            </h1>

            <p class="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>
          </div>
          <div class="hero-image-box">
            <img src={hero} class="hero-image" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
