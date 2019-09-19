import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

const Styles = styled.div`
  .change {
    height: 100vh;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    font-size: 70px;
    font-family: "Spectral SC", serif;
  }
`;

let settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  autoplay: true

};
function LeftRight() {
  return (
    <Slider {...settings}>
      <div>
        <p>COMING SOON</p>
        {/* <img src="images/example4slider/neongreen.jpg" /> */}
      </div>
      <div>
        <p>COMING SOON</p>

        {/* <img src="images/example4slider/black.jpg" /> */}
      </div>
            <div>
        <p>COMING SOON</p>
      </div>
    </Slider>
  );
}
export default LeftRight;
