import React from "react";
import Layout from "../components/Layout";

const profile = () => {
  return (
    <Layout>
      <div className="w-9/12 mx-auto text-base p-5">
        <div className="text-2xl mb-3 text-white sm:text-3xl">
          Formål med siden
        </div>

        <div className="flex flex-column justify-between">
          <div className="text-base">
            Hjemmesiden har til formål at give folk indblik i hvilke serier der
            er værd at se baseret på bruger anmeldelser.{" "}
          </div>

          <div className="text-base my-3">
            Det er muligt at se hvor mange sæsoner en bestemt serie har ved at
            klikke på dens banner .
          </div>

          {/* <div className="text-base">
            Hvis du vil komme i kontakt for at give feedback eller andet kan du
            sende en mail: <br />
            <a href="mailto: abdulahi_2610@hotmail.com" target="_blank">
              abdulahi_2610@hotmail.com
            </a>
            .
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default profile;
