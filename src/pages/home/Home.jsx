import { Link } from "react-router-dom";
import { ItemList } from "../search/Search";
import { ItemDetails } from "../search/Search";
import ParticlesComponent from "../../data/particle-config";
import AOS from "aos";
import "aos/dist/aos.css";

import "./home.css";
import { useEffect, useState } from "react";


const Home = () => {
  return (
    <>
      <ParticlesComponent id="particles" />

      <Header />
      <Discovery />
      <Services />
    </>
  );
};
function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="header">
      <div className="container">
        <div className="homeBackground">
          <div
            className="header-title"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1>
              Refresh your day and yourself with the <span>Where To</span>{" "}
              platform
            </h1>
            <p>
              My Qahwati platform helps users discover cafés and locate them in
              their area or around the world. It serves as a comprehensive guide
              to cafes, providing detailed information about each store. Such as
              location, opening hours, contact details, menus and customer
              ratings
            </p>
            <ul>
              <Link to="/search">
                <i class="uil uil-search"></i>
              </Link>
              <Link to="/contact">
                <i class="uil uil-phone"></i>
              </Link>
              <Link to="/about">
                <i class="uil uil-info-circle"></i>
              </Link>
            </ul>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/Pumpkin-Spice-Latte-Coffee-vector-Graphics-77529071-1-removebg-preview-removebg-preview.png"
              }
              alt="coffe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function Discovery() {
  const [cafeListdata, setCafeListdata] = useState(null);
  useEffect(() => {
    fetch("https://coffee-backend-phi.vercel.app/cafes")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setCafeListdata(data);
      });
  }, []);
  console.log(cafeListdata);
  return (
    <section className="discovery">
      <h1 className="main-title">discovery</h1>
      <div className="container">
        <ItemList>
          {cafeListdata?.map((data) => {
            return <ItemDetails data={data} key={data.name} />;
          })}
        </ItemList>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section class="services">
      <h1 className="main-title">What We're Offering</h1>
      <p>Services Built Specifically for your Business</p>
      <div className="services-cards">
        <div
          className="service-card"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="service-circle"></div>
          <div className="service-info">
            <h2>
              Reservation <br /> System
            </h2>
            <p>
              Reservation System: The website can allow users to reserve tables
              or make reservations for events at the coffee shop.
            </p>
          </div>
        </div>
        <div
          className="service-card"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="service-circle"></div>
          <div className="service-info">
            <h2>
              Menu <br /> Information
            </h2>
            <p>
              The website can display the coffee shop's menu, prices, and offer
              options for ordering coffee or food for pickup or delivery.
            </p>
          </div>
        </div>
        <div
          className="service-card"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="service-circle"></div>
          <div className="service-info">
            <h2>
              Reviews <br /> and Ratings
            </h2>
            <p>
              The website can show reviews and ratings from other customers to
              help users make informed decisions.
            </p>
          </div>
        </div>
        <div
          className="service-card"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="service-circle"></div>
          <div className="service-info">
            <h2>
              Filtering <br /> Options
            </h2>
            <p>
              Add filters to the search results, such as cafe and cafe &
              plasystation and cafe & study and cafe & food and conference room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
