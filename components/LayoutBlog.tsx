import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
// import LayoutSite from "../components/Layout";

const name = "Serier man skal se";
export const siteTitle = "Serie man skal se";

export default function LayoutBlog({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Serie man skal se"
          content="Få overblik hvilke serier der er værd at se baseret på bruger score"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h3 className={utilStyles.heading2Xl}>{name}</h3>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Tilbage til forside</a>
          </Link>
        </div>
      )}
    </div>
  );
}
