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
          Hjemmesiden har til formål at give folk indblik i hvilke serier der er
          værd at se baseret på bruger anmeldelser. Det er muligt at se hvor
          mange sæsoner en bestemt serie har ved at klikke på dens banner.{" "}
          <br />
          Det er også muligt at se trailers til et bestemt show.
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
