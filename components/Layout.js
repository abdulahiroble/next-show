import React from "react";
import Head from "next/head";
import Nav from "./nav";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Moviecloud</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/solar/bootstrap.min.css"
        />
      </Head>
      <Nav />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
