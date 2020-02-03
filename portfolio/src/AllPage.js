import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import LeftRight from "./components/Slide.js";

/*SLICK CAROUSEL*/

/*SLICK CAROUSEL*/

const Styles = styled.div`
  /*IMAGE AND BACKGROUND STYLING*/
  .aboutMeBg,
  .projectBg,
  .contactBg {
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    /*Gives the parralax scrolling*/
    background-attachment: fixed;
  }

  .aboutMeBg {
    background-image: url("images/background/dark.jpg");
    min-height: 100vh;
  }

  .projectBg {
    background-color: white;
    min-height: 100vh;
  }
  .contactBg {
    background-image: url("images/background/light.jpg");
    min-height: 100vh;
  }

  /*Some phones can have problems with parralax*/
  @media (max-width: 568px) {
    .aboutMeBg,
    .projectBg,
    .contactBg {
      background-attachment: scroll;
    }
  }
  /*IMAGE AND BACKGROUND STYLING*/

  /*About styling*/
  .container1 {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }

  .AboutMeTitle {
    text-align: center;
    color: red;
    font-size: 70px;
    font-family: "Spectral SC", serif;
  }
  .AboutMe {
    text-align: center;
    color: black;
    font-size: 30px;
    font-family: "Vollkorn SC", serif;
  }

  .ProjectsTitle {
    text-align: center;
    color: red;
    font-size: 50px;
    font-family: "Spectral SC", serif;
  }

  .ContactTitle {
    text-align: center;
    color: red;
    font-size: 50px;
    font-family: "Spectral SC", serif;
  }
  /*About styling*/

  /*CONTACT ME*/
  .contactbox {
    height: 50vh;
    width: 75vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: red;
    font-family: "Vollkorn SC", serif;
  }

  a {
    text-decoration: none;
    color: blue;
    font-family: "Vollkorn SC", serif;
  }

  .contactStyle {
    font-size: 40px;
  }
  /*CONTACT ME*/

  /*MEDIA QUERYS*/
  @media (min-width: 1281px) {
  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

  @media (min-width: 1025px) and (max-width: 1280px) {
    .container1 {
      width: 700px;
    }
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 768px) and (max-width: 1024px) {
    .container1 {
      width: 650px;
    }

    .ProjectsTitle {
      font-size: 40px;
    }
    .ContactTitle {
      font-size: 40px;
    }
  }

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .container1 {
      width: 650px;
    }

    .ProjectsTitle {
      font-size: 40px;
    }
    .ContactTitle {
      font-size: 40px;
    }
  }

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

  @media (min-width: 481px) and (max-width: 767px) {
    .container1 {
      width: 80vw;
    }

    .ProjectsTitle {
      font-size: 25px;
    }
    .ContactTitle {
      font-size: 25px;
    }
    h5 {
      white-space: initial;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 480px) {
    .AboutMeTitle {
      font-size: 40px;
    }

    .container1 {
      width: 80vw;
    }

    .ProjectsTitle {
      font-size: 25px;
    }
    .ContactTitle {
      font-size: 25px;
    }
    h5 {
      white-space: initial;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (min-width: 0px) and (max-width: 319px) {
    .container1 {
      width: 80vw;
    }

    .ProjectsTitle {
      display: none;
    }
    .ContactTitle {
      display: none;
    }
    h5 {
      white-space: initial;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  /*MEDIA QUERYS*/
`;

function Allpage() {
  return (
    <Styles>
      <div className="aboutMeBg" id="About">
        <Navigation />

        <div className="container1">
          <h1 className="AboutMeTitle">Austin Franks</h1>
          <p className="AboutMe">
            I am a full stack web developer versed in react, html, javascript,
            css, mysql, and mongodb
          </p>
        </div>
      </div>

      <section className="container2">
        <h2 className="ProjectsTitle">My Projects and Experience</h2>
      </section>

      <div className="projectBg" id="Projects">
        <div className="projectStyle">
          <span className="border">
            <LeftRight />
          </span>
        </div>
      </div>

      <section className="container3">
        <h2 className="ContactTitle">Contact Me</h2>
      </section>

      <div className="contactBg" id="Contact">
        <div className="contactStyle">
          <span className="contactbox">
            <h5>Email me at austinfranksjobs@gmail.com</h5>
            <h5>
              <a
                href="https://www.linkedin.com/in/austin-franks-247b18170/"
                target="_blank"
              >
                Check out my linkedin
              </a>
            </h5>
            <h5>
              <a href="https://github.com/AustinFranks6" target="_blank">
                Take a look at my github
              </a>
            </h5>
          </span>
        </div>
      </div>
    </Styles>
  );
}

export default Allpage;
