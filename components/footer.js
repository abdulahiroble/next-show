import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#110c11", color: "white", padding: "32px" }}
    >
      <h2 style={{ letterSpacing: "3px" }}>Moviecloud</h2>

      <ul
        className="navbar-nav ml-auto"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/profile">
            <a className="nav-link">Profile</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/discover">
            <a className="nav-link">Discover</a>
          </Link>
        </li>
      </ul>
      <br />
      <p style={{ color: "#d3d3d3" }}>
        Copyright &copy;2020 <br /> Code and design by Abdulahi Roble
      </p>
      <br />
      {/* <ul
        className="navbar-nav ml-auto"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start"
        }}
      >
        <li className="nav-item">
          {" "}
          <img
            style={{ width: "50%" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
            alt=""
          />
        </li>
        <li className="nav-item">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fas fa-code"></i>
        </li>
      </ul> */}
      <img
        style={{ width: "50%" }}
        src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
        alt=""
      />
      <i class="fab fa-facebook"></i>
      <i class="fab fa-twitter"></i>
      <i class="fas fa-code"></i>
    </footer>
  );
};

export default footer;
