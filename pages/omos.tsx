import React from "react";
import Layout from "../components/Layout";

const profile = () => {
  return (
    <Layout>
      <div className="w-full mx-auto text-base p-5">
        <div className="text-2xl mb-3 text-white sm:text-3xl">
          Formål med siden
        </div>

        <div className="text-lg">
          Hjemmesiden har til formål at give folk indblik i hvilke serier du
          skal se baseret på brugerbedømmelse. Det er muligt at se hvor mange
          sæsoner en bestemt serie har ved at klikke på dens banner. <br />
          Det er også muligt at se trailers til et bestemt show og få et kort
          resume af hvad serien handler om. <br /> <br />
          Derudover har vi en blog hvor vi kommer med vores bud hvilke serier i
          2020 man skal se og hvilke streamingstjenester man kan se dem på.
        </div>

        <div className="text-2xl mb-2 mt-5 text-white sm:text-3xl">
          Affiliate links
        </div>

        <div className="text-lg my-3">
          Denne hjemmeside er affiliate finansieret. Hver gang en besøgende
          klikker på et af vores links og abonnerer til en streaming tjeneste,
          modtager vi en lille kommision. <br />
          Kommisionen går til vedligholdese og videreudvikling af hjemmesiden.
        </div>
      </div>
    </Layout>
  );
};

export default profile;
