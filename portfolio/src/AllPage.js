import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";

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
    background-image: url("images/background/mountains.JPG");
    min-height: 100vh;
  }

  .projectBg {
    background-color: white;
    min-height: 100vh;
  }
  .contactBg {
    background-image: url("images/background/contactMe.JPG");
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
    top: 40%;
    left: 50%;
    margin-top: -50px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    opacity: 0.9;
  }

  .AboutMeTitle {
    text-align: center;
    color: red;
    font-size: 70px;
  }
  .AboutMe {
    text-align: center;
    color: peachpuff;
    font-size: 30px;
  }

  .ProjectsTitle {
    text-align: center;
    color: red;
    font-size: 50px;
  }

  .ContactTitle {
    text-align: center;
    color: red;
    font-size: 50px;
  }
  /*About styling*/
`;

function Allpage() {
  return (
    <Styles>
      <div className="aboutMeBg" id="About">
        <Navigation />

        <div className="container1">
          <h1 className="AboutMeTitle">Austin Franks' Portfolio</h1>
          <p className="AboutMe">
            I am a full stack web developer who's well versed in react, html,
            javascript, css, mysql, and mongodb
          </p>
        </div>
      </div>

      <section className="container2">
        <h2 className="ProjectsTitle">My Projects/Experience</h2>
      </section>

      <div className="projectBg" id="Projects">
        <div className="projectStyle">
          <span className="border">My projects</span>
        </div>
      </div>

      <section className="title3">
        <h2 className="ContactTitle">Contact Me</h2>
      </section>

      <div className="contactBg" id="Contact">
        <div className="contactStyle">
          <span className="border"></span>
        </div>
      </div>
    </Styles>
  );
}

export default Allpage;
