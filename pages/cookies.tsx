import React from "react";
import Layout from "../components/Layout";

const cookies = () => {
  return (
    <Layout>
      <div className="w-full mx-auto text-base p-3">
        <div className="text-2xl mb-3 text-white sm:text-3xl">Cookies</div>

        <div className="mb-4">
          Hjemmesiden anvender "cookies". Cookies er en tekstfil, der gemmes på
          din computer, mobiltelefon, tablet eller tilsvarende med det formål at
          genkende den, huske indstillinger, udfører statistik og målrette
          annoncer. Cookies kan ikke indeholde skadelig kode som f.eks virus. Du
          kan slette eller blokerer cookies. Se hvordan her:
        </div>

        <a
          href="http://minecookies.org/cookiehandtering"
          className="bg-blue-700 text-white"
        >
          http://minecookies.org/cookiehandtering
        </a>

        <div className="text-2xl mb-3 mt-5 text-white sm:text-3xl">
          Nødvendige cookies
        </div>

        <div className="mb-5">
          Nogle cookies kræves for at hjemmesiden kan fungere. Hjemmesiden
          fungerer ikke korrekt uden disse cookies, og de er som standard
          aktiveret.
        </div>

        <div className="text-2xl mb-3 text-white sm:text-3xl">
          Google Analytics
        </div>

        <div className="mt-3 mb-3">
          Disse cookies giver os mulighed for at tælle besøgende og
          trafikkilder, så vi kan måle og forbedre ydeevnen af vores hjemmeside.
          De hjælper os med at finde ud af, hvilke sider der er mest og mindst
          populære samt hvordan de besøgende bevæger sig på siden.
        </div>
        <a
          href="http://tools.google.com/dlpage/gaoptout"
          className="bg-blue-700 text-white"
        >
          Klik her for at fravælge cookies fra Google Analytics.
        </a>
      </div>
    </Layout>
  );
};

export default cookies;
