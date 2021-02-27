import React from "react";
import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <body className="flex flex-col min-h-screen">
      <Head>
        <title>Serier man skal se</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/solar/bootstrap.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KJKVMRK');`,
          }}
        />
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
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" href="../styles/tailwind.css" /> */}
      </Head>

      <Nav />
      <div className="flex-1">{props.children}</div>
      <br />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJKVMRK" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`,
        }}
      />
      <div>
        <Footer />
      </div>
    </body>
  );
};

export default Layout;
