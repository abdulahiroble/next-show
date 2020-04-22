import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";
// import { Analytics } from "../utility/analytics";
import { initGoogleAnalytics, registerPageView } from "../utility/analytics";

const Layout = (props) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGoogleAnalytics();
      window.GA_INITIALIZED = true;
    }
    registerPageView();
  });
  // Analytics.logPageView("/");
  return (
    <div>
      <Head>
        <title>seriermanskalse</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/solar/bootstrap.min.css"
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KJKVMRK');`,
          }}
        /> */}

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
      {/* <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJKVMRK" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`,
        }}
      /> */}
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
