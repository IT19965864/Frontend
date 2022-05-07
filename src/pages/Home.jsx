import React from "react";
import "../styles/Home.css";
import logo from "../img/logo-edited.png";
import hero from "../img/image2.png";
import mail from "../img/email.png";
import location from "../img/location.png";
import phone from "../img/phone image.png";
import { Link } from "react-router-dom";

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
              <Link to="/home" class="sections-links">
                Home
              </Link>
            </li>
            <li>
              <a href="#" class="sections-links">
                About Us
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
              Provide students with a convenient way of learning.
            </h1>

            <p class="hero-description">
              “Sipsayura Educational Center” is a fully fledged Educational
              Institute established in 2022 with two branches in Galle district.
              “Sipsayura” was founded by Mr. Sajana Fernando who is well reputed
              English Lecturer in Sri Lanka. “Sipsayura” has classes to Advanced
              Level following the Sinhala and English Medium Syllabus. Currently
              the student population is around 1500+. “Sipsayura Educational
              Center” has been able to maintain the trust and confidence of the
              parents regarding the future of the children as students have been
              able to excel in academic excellence. The secret behind our
              success is the superior quality of service and Utilize modern
              technology to provide equal learning opportunities and quality
              education in an affordable, accessible and user-friendly manner.
              We aim to provide our students with a convenient way of learning.
            </p>
          </div>
          <div class="hero-image-box">
            <img src={hero} class="hero-image" alt="" />
          </div>
        </div>
      </section>
      <section class="section-footer">
        <div class="container footer-grid">
          <div class="social">
            <img src={logo} alt=" omnifood-logo" class="logo footer-logo" />
          </div>
          <p class="copy-right-text prime-header">
            Copyright © 2022 by Sipsayura, Inc. All rights reserved.
          </p>
          <div class="e-mail grid-footer">
            <img src={mail} alt="" className="email-img" />
            <p class="contact-us-header prime-header">sipsayura@gamail.com</p>
          </div>
          <div class="Location grid-footer">
            <img src={location} alt="" className="email-img" />
            <p class="Account-header prime-header">No 12, Main road, Galle</p>
          </div>
          <div class="Phone grid-footer">
            <img src={phone} alt="" className="email-img" />
            <p class="company-header prime-header">0412276895</p>
          </div>
        </div>
      </section>
    </div>
  );
}
