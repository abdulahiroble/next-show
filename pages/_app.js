import "../styles/global.css";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import React from "react";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "da_DK",
            url: "https://seriermanskalse.dk/",
            site_name: "Serier man skal se",
          }}
        />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
