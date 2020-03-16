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
          crossOrigin="anonymous"
          SameSite="Lax"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Nav />
      <div
        className="container"
        style={{ paddingLeft: "35px", paddingRight: "35px" }}
      >
        {props.children}
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
