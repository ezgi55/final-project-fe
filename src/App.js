import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Venues from "./pages/Venues";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import HistoricalPlaces from "./pages/HistoricalPlaces";
import Upcoming from "./pages/Upcoming";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Upcoming">
          <Upcoming />
        </Route>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/HistoricalPlaces">
            <HistoricalPlaces />
            <Route path="/register">
              <Register />
            </Route>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Venues">
            <Venues />
          </Route>
        <Route path="/Venues">
        </Route>
        </Switch>

        <Footer />


      </Router>
    </>
  );
}

export default App;
