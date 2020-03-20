import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav className="navbar navbar-expand navba-dark bg-dark mb-4">
    <div className="container">
      <a href="/" className="navbar-brand">
        Moviecloud
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Hjem</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/profile">
              <a className="nav-link">Profil</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/discover">
              <a className="nav-link">Udforsk</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
