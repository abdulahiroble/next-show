import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <footer className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <a href="/" className="navbar-brand">
          Moviecloud
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
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
        </div>
      </div>
    </footer>
  );
};

export default footer;
