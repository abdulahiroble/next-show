import React from "react";
import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Moviecloud</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/solar/bootstrap.min.css"
        />
        <script
          src="https://kit.fontawesome.com/74cb01a65c.js"
          crossorigin="anonymous"
          SameSite="Lax"
        ></script>
      </Head>
      <Nav />
      <div className="container">{props.children}</div>
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
