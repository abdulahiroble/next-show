import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav className="navbar navbar-expand navba-dark bg-dark mb-4">
    <div className="container">
      <a href="/" className="navbar-brand">
        seriermanskalse.dk
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/omos">
              <a className="nav-link">Om</a>
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link href="/kontakt">
              <a className="nav-link">Kontakt</a>
            </Link> */}
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
