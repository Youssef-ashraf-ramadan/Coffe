import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav>
      <MobileHead />
      <Head />
    </nav>
  );
}
function Head() {
  return (
    <div className="head">
      <div className="container">
        <div className="logo">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <div className="whereTo">
              <span>Where To</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
                id="question-mark"
              >
                <path
                  fill="#333"
                  fillRule="evenodd"
                  d="M24 14.0001C26.222 14.0173 28 15.8114 28 18 28 20.1991 26.2048 22 23.9679 22 22.8633 22 21.9679 22.8954 21.9679 24V30C21.9679 31.1046 22.8633 32 23.9679 32 25.0725 32 25.9679 31.1046 25.9679 30V25.7498C29.4308 24.8653 32 21.7378 32 18 32 13.6144 28.4631 10.069 24.0959 10.001 24.0747 10.0003 24.0535 10 24.0321 10H23.9679C23.9466 10 23.9253 10.0003 23.9042 10.001 19.5369 10.069 16 13.6144 16 18 16 19.1046 16.8955 20 18 20 19.1046 20 20 19.1046 20 18 20 15.8114 21.778 14.0173 24 14.0001zM24 38C25.1046 38 26 37.1046 26 36 26 34.8954 25.1046 34 24 34 22.8954 34 22 34.8954 22 36 22 37.1046 22.8954 38 24 38z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </NavLink>
        </div>
        <div className="links">
          <ul className="ul-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search now</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
          </ul>
        </div>

        <span className="menu-icon">
          <i className="uil uil-bars"></i>
        </span>
      </div>
    </div>
  );
}

function MobileHead() {
  return (
    <div className="mobile-menu">
      <div className="container">
        <Link to={"/"}>
          <div className="mobile-icon">
            <i class="uil uil-estate"></i>
            <span>Home</span>
          </div>
        </Link>
        <Link to={"/search"}>
          <div className="mobile-icon">
            <i class="uil uil-search"></i>
            <span>Search</span>
          </div>
        </Link>
        <Link to={"/contact"}>
          <div className="mobile-icon">
            <i class="uil uil-phone"></i>
            <span>Contact</span>
          </div>
        </Link>
        <Link to={"/about"}>
          <div className="mobile-icon">
            <i class="uil uil-users-alt"></i>
            <span>About</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
