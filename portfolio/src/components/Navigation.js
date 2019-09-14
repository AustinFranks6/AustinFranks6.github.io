import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  nav {
    width: 90vw;
    height: 60px;
    background-color: whitesmoke;
    line-height: 60px;
    opacity: 0.9;
    border-radius: 10px;
  }

  nav ul {
    float: right;
    margin-right: 15px;
  }

  nav a {
    color: black;
    text-decoration: none;
    letter-spacing: 2px;
    vertical-align: middle;
  }

  nav ul li {
    list-style-type: none;
    display: inline-block;
    transition: 0.8s all;
  }
  nav ul li:hover {
    background-color: lightblue;
    border-radius: 20px;
  }

  nav ul li a {
    text-decoration: none;
    color: red;
    padding: 30px;
    text-transform: uppercase;
    opacity: 1;
  }
`;

function Navigation() {
  return (
    <Styles>
      <div className="main">
        <nav>
          <ul>
            <li>
              <a href="#About">About me</a>
            </li>
            <li>
              <a href="#Projects">My Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact me</a>
            </li>
          </ul>
        </nav>
      </div>
    </Styles>
  );
}

export default Navigation;
