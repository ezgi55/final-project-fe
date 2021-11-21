import React from "react";

const Home = () => {
  //html ve return

  return (
    <div>
      <section id="intro">
        <div class="intro-container wow fadeIn">
          <h1 class="mb-4 pb-0">
            15 Aralık Cumartesi
            <br />
            <span>Fikri Karayel</span>
          </h1>
          <p class="mb-4 pb-0">At Noxgrata Bar</p>

          <a
            href="https://www.youtube.com/watch?v=edxLzNVVVEM"
            class="venobox play-btn mb-4"
            data-vbtype="video"
            data-autoplay="true"
          ></a>
          <a href="#about" class="about-btn scrollto">
            About This Event
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
