import React, { useEffect, useState } from "react";
import "./cafe-details.css";
import { Star } from "../search/Search";
import { Link, useParams } from "react-router-dom";

const CafeDetails = () => {
  const [cafeInfo, setCafeInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://coffee-backend-phi.vercel.app/cafes/${id}`).then((res) => {
      res.json().then((cafeInfo) => {
        setCafeInfo(cafeInfo);
      });
    });
  }, []);

  if (!cafeInfo) return "";

  return (
    <>
      <section className="cafe-details">
        <div className="container">
          <div className="cafe-imgs">
            <CoffeImgsBox>{cafeInfo.img.one}</CoffeImgsBox>
            <CoffeImgsBox>{cafeInfo.img.two}</CoffeImgsBox>
            <CoffeImgsBox>{cafeInfo.img.three}</CoffeImgsBox>
          </div>
          <DetailsBox cafeInfo={cafeInfo}>
            <div className="details-boxes">
              <RatingBox cafeInfo={cafeInfo} />
              <LocationBox cafeInfo={cafeInfo} />
            </div>
          </DetailsBox>
          <Link to={`/pickup/${cafeInfo.id}`}>Take Place</Link>
        </div>
      </section>
    </>
  );
};

function DetailsBox({ children }) {
  return <>{children}</>;
}
function RatingBox({ cafeInfo }) {
  console.log(cafeInfo);
  return (
    <div className="box rating-box">
      <h2>Rating</h2>
      <div className="rate-num">
        <span className="rate">{cafeInfo.rating}</span>
        <Star />
      </div>
      <p>21 from 485 Cafes in Kuwit</p>
      <hr />
      <div className="rating-row">
        <div className="text">
          <span>Food</span>
          <i className="uil uil-crockery"></i>
        </div>
        <Star />
      </div>
      <div className="rating-row">
        <div className="text">
          <span>Service</span>
          <i className="uil uil-tag-alt"></i>
        </div>
        <Star />
      </div>
      <div className="rating-row">
        <div className="text">
          <span>Price</span>
          <i className="uil uil-wallet"></i>
        </div>
        <Star />
      </div>
      <div className="rating-row">
        <div className="text">
          <span>Weather</span>
          <i className="uil uil-cloud"></i>
        </div>
        <Star />
      </div>
    </div>
  );
}
function LocationBox({ cafeInfo }) {
  return (
    <>
      <div className="box location-box">
        <h2>Location & Phone</h2>
        <div className="location-details">
          <div className="location">
            <i className="uil uil-map-marker"></i>
            <span>{cafeInfo.address}</span>
          </div>
          <div className="location">
            <i className="uil uil-phone"></i>
            <span>{cafeInfo.phone}</span>
          </div>
          <div className="location">
            <i className="uil uil-clock-eight"></i>
            <span>{cafeInfo.time}</span>
          </div>
        </div>
      </div>
      <div className="box location-box">
        <h2>Desrciption</h2>
        <p>{cafeInfo.details}</p>
      </div>
    </>
  );
}
function CoffeImgsBox({ children }) {
  return (
    <div className="img-box">
      <img src={children} alt="" />
    </div>
  );
}
export default CafeDetails;
