import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

const Styles = styled.div`
  .change {
    height: 100vh;
  }

  .sub-a {
    align-content: center;
    height: 100%;
    font-family: "PT Sans", sans-serif;
  }

  a {
  }

  video {
  }
`;

let settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      }
    }
  ]
};
function LeftRight() {
  return (
    <Slider {...settings}>
      <div className="sub-a">
        <h1>TRULYBLESSED</h1>
        <p>
          Truly blessed is a landing page that gives the owner links to their
          social media as asked and a gallery to show of their custom pieces.
          This is built in react and deployed with netlify at
          <br></br>
          <a href="trulyblessed.netlify.com" target="_blank">
            trulyblessed.netlify.com
          </a>
        </p>
      </div>
      <div className="sub-a">
        <video width="100%" height="auto" controls>
          <source src="/videos/TrulyBlessed.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="sub-a">
        <h1>BEATSBYFRANKS</h1>
        <p>
          This is my very own beatsite in the works it is currently unfinished
          but shall be very soon.This is built in react and deployed with
          netlify at <br></br>
          <a href="beatsbyfranks.netlify.com" target="_blank">
            beatsbyfranks.netlify.com
          </a>
        </p>
      </div>
      <div className="sub-a">
        <video width="100%" height="auto" controls>
          <source src="/videos/BeatsbyFranks.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="sub-a">
        <h1>CALCULATOR</h1>
        <p>This is a calculator I built with html css and javascript</p>
      </div>
      <div className="sub-a">
        <video width="100%" height="auto" controls>
          <source src="/videos/CalculatorVideo.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="sub-a">
        <h1>TriviaGame</h1>
        <p>
          This was my first project in my coding bootcamp. Me and another
          classmate were put on the front end. We made a great interface for the
          game.
        </p>
      </div>
      <div className="sub-a">
        <video width="100%" height="auto" controls>
          <source src="/videos/TriviaVideo.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Slider>
  );
}
export default LeftRight;
