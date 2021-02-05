import React from "react";
import Link from "next/link";
import { TmdLogo } from "../stories/TmdLogo";
import CookieConsent from "react-cookie-consent";

const footer = () => {
  return (
    <footer
      className="flex-grow"
      style={{ backgroundColor: "#110c11", color: "white", padding: "32px" }}
    >
      <CookieConsent
        location="bottom"
        buttonText="Accepter cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Vi bruger cookies til, at få vores hjemmeside til at virke ordentligt,
        personalisere indhold og reklamer, tilbyde funktioner i forhold til
        sociale medier og analysere vores traffik. Vi deler også information
        vedrørende din brug af vores hjemmeside med analytiske
        samarbejdspartnere.
        <Link href="/cookies">
          <a style={{ textDecoration: "none", color: "yellow" }}>
            Læs mere om cookies
          </a>
        </Link>
      </CookieConsent>
      <div className="text-xl mb-3">seriermanskalse.dk</div>
      <div className="flex flex-column justify-between text-lg">
        <div>
          <TmdLogo />
        </div>
        <div>Copyright &copy;2021</div>
        <div>
          {" "}
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </div>
      </div>
    </footer>
  );
};

export default footer;
