import Head from "next/head";
import Layout, { siteTitle } from "../components/LayoutBlog";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import LayoutSite from "../components/Layout";
import { NextSeo } from "next-seo";

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <>
      <NextSeo
        title="Blog omkring serier du skal se"
        description="Blogartikler om de nyeste serier, samt serier der er værd at se baseret på brugeranmeldelser"
      />
      <LayoutSite>
        <Layout home>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="text-xl text-white">{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      </LayoutSite>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
