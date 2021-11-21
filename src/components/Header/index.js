import React from "react";
import { Link } from "react-router-dom";
import Upcoming from "../../pages/Upcoming";

const Header = () => {
  //html ve return
  return (
    <div>
      <header id="header">
        <div class="container">
          <div id="logo" class="pull-left">
            <h1>
              <a href="/">
                {" "}
                <span>VERI</span>
                <span style={{ color: "white" }}>-GO</span>
              </a>
            </h1>
            {/* <a href="#intro" class="scrollto"><img src="img/logo.png" alt="" title=""></a> */}
          </div>

          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li class="menu-active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Venues">Venues</Link>
              </li>
              <li>
                <Link to="/HistoricalPlaces">PlacesToSee</Link>
              </li>
              <li>
                <Link to="/Upcoming">Upcoming Events</Link>
              </li>
              <li>
                <Link to="/Gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li class="buy-tickets">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
