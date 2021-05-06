import "../styles/global.css";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import { SWRConfig } from 'swr';
import React from "react";
import "../styles/main.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/react"
// import { Global, css } from '@emotion/react';
import customTheme from "../styles/theme"

export function reportWebVitals(metric) {
  console.log(metric);
}

// const GlobalStyle = ({ children }) => {
//   return (
//     <>
//       <CSSReset />
//       <Global
//         styles={css`
//           html {
//             min-width: 360px;
//             scroll-behavior: smooth;
//           }
//           #__next {
//             display: flex;
//             flex-direction: column;
//             min-height: 100vh;
//           }
//         `}
//       />
//       {children}
//     </>
//   );
// };

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (

      <ThemeProvider theme={customTheme}>
        <React.Fragment>
          <DefaultSeo
            openGraph={{
              type: "website",
              locale: "da_DK",
              url: "https://seriermanskalse.dk/",
              site_name: "serier man skal se",
            }}
          />
          <SWRConfig value={{ fetcher: (url) => fetch(url).then(r => r.json()) }}>
            <Component {...pageProps} />
          </SWRConfig>
        </React.Fragment>

      </ThemeProvider>
    );
  }
}
