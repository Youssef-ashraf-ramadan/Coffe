import { Link } from "react-router-dom";

import "./about.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <AboutBody />
    </>
  );
};
function AboutBody() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-text">
          <h1>Who We ?</h1>
        </div>
        <AboutDetails />
      </div>
    </section>
  );
}
function AboutDetails() {
  return (
    <div className="aboutus-Header">
      <div className="about-info">
        <div className="about-data">
          <div data-aos="fade-right" data-aos-duration="1000">
            <Svg />
            <span>
            Where to platform helps users discover cafés and locate them in their area or around the world. It serves as a comprehensive guide to cafes, providing detailed information about each store. Such as location, opening hours, contact details, menus and customer ratings
            </span>
          </div>
        </div>
        <div className="about-data">
          <div data-aos="fade-right" data-aos-duration="1500">
            <Svg />
            <span>
              Find the perfect coffee shop for your next caffeine fix. Discover
              local and chain coffee shops in your area or wherever you travel.
              Read reviews, view addresses and hours, and find your new favorite
              coffee spot with us. Your perfect cup of coffee is just a click
              away.
            </span>
          </div>
        </div>
        <div
          className="about-buttons"
          data-aos="fade-right"
          data-aos-duration="1700"
        >
          <Link to="/search">Search </Link>
          <Link to="/contact">Contact </Link>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1500">
        <img
          src={process.env.PUBLIC_URL + "./assets/about-imgs/about.png"}
          alt="about"
        />
      </div>
    </div>
  );
}
function Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="right-arrow"
    >
      <g data-name="Layer 2">
        <g data-name="arrow-right">
          <rect
            width="24"
            height="24"
            opacity="0"
            transform="rotate(180 12 12)"
          ></rect>
          <path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"></path>
        </g>
      </g>
    </svg>
  );
}
export default About;
