import React from "react";
import Layout from "../components/Layout";

const profile = () => {
  return (
    <Layout>
      <h2>Formål med siden</h2>

      <p>
        Hjemmesiden har til formål at give folk indblik i hvilke serier der er
        værd at se baseret på bruger anmeldelser.{" "}
      </p>

      <p>
        Det er muligt at se hvor mange sæsoner en bestemt serie har ved at
        klikke på dens banner .
      </p>

      <p>
        Hvis du vil komme i kontakt for at give feedback eller andet kan du
        sende en mail: <br />
        <a href="mailto: abdulahi_2610@hotmail.com" target="_blank">
          abdulahi_2610@hotmail.com
        </a>
        .
      </p>
    </Layout>
  );
};

export default profile;
