import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Discovery</h4>
                  <span>
                    Find the perfect coffee shop for your next caffeine fix.
                    Discover local and chain coffee shops in your area or
                    wherever you travel. Read reviews, view addresses and hours,
                    and find your new favorite coffee spot with us. Your perfect
                    cup of coffee is just a click away.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>+0096595591390</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>wheretocafe@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <div class="footer-widget-heading">
                    <h3>About Us</h3>
                  </div>
                </div>
                <div class="footer-text">
                  <p>
                    Where to platform helps users discover cafés and locate them
                    in their area or around the world. It serves as a
                    comprehensive guide to cafes, providing detailed information
                    about each store. Such as location, opening hours, contact
                    details, menus and customer ratings
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/search"}>Search</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    My Qahwati platform helps users discover cafés and locate
                    them in their area or around the world
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div
            class="row"
            style={{ marginBottom: "0", justifyContent: "center" }}
          >
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  All Right Reserved
                  <Link
                    target="_blank"
                    to={
                      "https://api.whatsapp.com/send?phone=201024289101&text=السلام عليكم"
                    }
                  >
                    Ahmed Sallam
                  </Link>
                  &
                  <Link
                    target="_blank"
                    to={
                      "https://api.whatsapp.com/send?phone=201025376604&text=السلام عليكم"
                    }
                  >
                    Youssef Ashraf
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
