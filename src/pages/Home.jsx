import React from "react";

export default function Home() {
  return (
    <section class="section-navigation">
      <a href="">
        <img src="img/omnifood-logo.png" alt=" omnifood-logo" class="logo" />
      </a>
      <nav class="page-nav-links">
        <ul class="nav-links">
          <li>
            <a href="#" class="sections-links">
              section1
            </a>
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
              Try for free
            </a>
          </li>
        </ul>
      </nav>
      <button class="mobile-navigation-btn">
        <ion-icon class="mobile-navigation-icon" name="menu-outline"></ion-icon>
        <ion-icon
          class="mobile-navigation-icon"
          name="close-outline"
        ></ion-icon>
      </button>
      {/* <!-- <div class="sighn-up">
      <button class="sighn-up-btn btn">Try for free</button>
    </div> --> */}
    </section>
  );
}
