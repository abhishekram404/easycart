import React, { useEffect, useState } from "react";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import fastDelivery from "./assets/fast-delivery.svg";
import largeVariety from "./assets/large-variety.svg";
import payOnline from "./assets/pay-online.svg";
import shopFromMobile from "./assets/shop-from-mobile.svg";

const Home = () => {
  const [caption, setCaption] = useState("");
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <div className="home">
      <div className="welcome">
        <div className="top-wrapper">
          <div className="inner-wrapper">
            <p>Get easy deals delivered directly at your door.</p>
            <div className="buttons">
              <button text="Start Exploring">Start Exploring</button>
              <button text="Login">Login</button>
            </div>
          </div>
        </div>
        <div className="info-cont">
          <div className="info">
            <p>Scroll down to explore</p>
            <div className="arrows">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="features-page">
        <div className="feature-title" data-aos="fade-up">
          <div>Our Services</div>
        </div>
        <Feature
          image={fastDelivery}
          aos="fade-left"
          msg="Fast Delivery"
          st={caption}
        />
        <Feature
          image={largeVariety}
          aos="fade-right"
          msg="Large Variety of Products"
          onMouseOver={setCaption("hello")}
        />
        <Feature image={payOnline} aos="fade-left" msg="Easy Payment" />
        <Feature
          image={shopFromMobile}
          aos="fade-right"
          msg="Shop from Mobile"
        />
      </div>
    </div>
  );
};

const Feature = (props) => {
  return (
    <div
      className="features-cont"
      data-aos={props.aos}
      data-aos-offset="450"
      data-aos-easing="linear"
    >
      <div className="feature">
        <div className="inner-circle">
          <img src={props.image} alt="svg" />
        </div>
      </div>
      <h3>{props.st}</h3>
    </div>
  );
};

export default Home;
