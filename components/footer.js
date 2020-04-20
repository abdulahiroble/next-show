import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Instagram from "../images/Instagram.png";
import Twitter from "../images/Twitter.png";
import Github from "../images/Github.png";
import CookieConsent from "react-cookie-consent";

const footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#110c11", color: "white", padding: "32px" }}
    >
      <style jsx>{`
        @media (min-width: 1280px) {
          .container {
            max-width: 500px;
            margin-left: -1%;
          }

          .item {
            width: 90%;
          }
        }
      `}</style>

      <CookieConsent
        location="bottom"
        buttonText="Accepter cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Vi bruger cookies til, at få vores hjemmeside til at virke ordentligt,
        personalisere indhold og reklamer, tilbyde funktioner i forhold til
        sociale medier og analysere vores traffik. Vi deler også information
        vedrørende din brug af vores hjemmeside med analytiske
        samarbejdspartnere.
        <Link
          href="/cookies"
          style={{ textDecoration: "none", color: "yellow" }}
        >
          <a style={{ textDecoration: "none", color: "yellow" }}>
            Læs mere om cookies
          </a>
        </Link>
      </CookieConsent>
      <h2 style={{ letterSpacing: "3px" }}>seriermanskalse.dk</h2>

      <ul
        className="navbar-nav ml-auto"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <li className="nav-item">
          {/* <Link href="/">
            <a className="nav-link" style={{ paddingRight: "40px" }}>
              Hjem
            </a>
          </Link> */}
        </li>
        <li className="nav-item">
          <Link href="/omos">
            <a className="nav-link" style={{ paddingRight: "50px" }}>
              Om
            </a>
          </Link>
        </li>
        <li className="nav-item">
          {/* <Link href="/kontakt">
            <a className="nav-link">Kontakt</a>
          </Link> */}
        </li>
      </ul>
      <br />
      <p style={{ color: "#d3d3d3" }}>
        Copyright &copy;2020 <br /> Code and design by Abdulahi Roble
      </p>
      <br />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img
          style={{ width: "60%", marginRight: "50px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
          className="tmd"
        />
        <div className="item">
          <a href="https://www.instagram.com/abdulahicodes" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
        <div
          className="item"
          style={{ paddingLeft: "6px", paddingRight: "6px" }}
        >
          <a href="https://twitter.com/AbdulahiRoble" target="_blank">
            <img src={Twitter} alt="" />
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/abdulahiroble" target="_blank">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      <br />
    </footer>
  );
};

export default footer;
