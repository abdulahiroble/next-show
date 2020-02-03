import React from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const MovieDetail = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <Layout>
      {/* {props.popular.results.map(test => {
        return <h1>{test.id}</h1>;
      })} */}
      {/* {console.log(props.popular.results.map(test => test.id))} */}
      {/* {console.log(props.popular.results)} */}
      <p>Test: {pid}</p>
    </Layout>
  );
};

export default MovieDetail;
