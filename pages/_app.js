import "../styles/global.css";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import React from "react";
import "../styles/main.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export function reportWebVitals(metric) {
  console.log(metric);
}
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
            site_name: "serier man skal se",
            images: [
              {
                url: 'https://seriermanskalse/hompage.png',
                width: 1280,
                height: 720
              }
            ]
          }}
        />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
