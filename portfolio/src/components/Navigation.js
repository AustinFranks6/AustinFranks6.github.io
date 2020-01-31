import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  nav {
    width: 100vw;
    height: 60px;
    max-width: 100%;
    background-color: white;
    line-height: 60px;
    opacity: 1;
    font-family: "Mirza", cursive;
    word-spacing: 0.5em;
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
    color: #ffffff !important;
    background: red;
    border-color: #f6b93b !important;
    transition: all 0.4s ease 0s;
  }

  nav ul li a {
    text-decoration: none;
    color: red;
    padding: 30px;
    text-transform: uppercase;
    opacity: 1;
    transition: 0.8s all;
  }

  a:hover {
    color: white;
    letter-spacing: 5px;
  }

  .logo {
    display: inline-block;
    vertical-align: top;
    width: 50px;
    height: 60px;
    margin-right: 20px;
  }

  @media (min-width: 1281px) {
  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

  @media (min-width: 1025px) and (max-width: 1280px) {
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 768px) and (max-width: 1024px) {
    nav {
      height: 50px;
      line-height: 50px;
      word-spacing: 0.1em;
    }

    nav a {
      letter-spacing: 1px;
    }

    .logo {
      height: 50px;
      width: 40px;
    }
  }

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    nav {
      height: 50px;
      line-height: 50px;
      word-spacing: 0.1em;
    }

    nav a {
      letter-spacing: 1px;
    }

    .logo {
      height: 50px;
      width: 40px;
    }
  }

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

  @media (min-width: 481px) and (max-width: 767px) {
    nav {
      height: 40px;
      line-height: 40px;
      word-spacing: 0.1em;
    }

    nav ul li a {
      padding: 10px;
    }

    nav a {
      letter-spacing: 0.5px;
    }

    .logo {
      height: 40px;
      width: 30px;
    }

    a {
      font-size: 15px;
    }
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 480px) {
    nav {
      height: 40px;
      line-height: 40px;
      word-spacing: 0.1em;
    }

    nav ul li a {
      padding: 3px;
    }

    nav a {
      letter-spacing: 0.5px;
    }

    .logo {
      height: 40px;
      width: 30px;
    }

    a {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 339px) {
    nav {
      display: none;
    }
  }
`;

function Navigation() {
  return (
    <Styles>
      <div className="main">
        <nav>
          <img src="/images/mylogo2.jpg" className="logo" />
          <ul>
            <li>
              <a href="#Projects" className="verysmall2">
                My Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className="verysmall3">
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Styles>
  );
}

export default Navigation;
