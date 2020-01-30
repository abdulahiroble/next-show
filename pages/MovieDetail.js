import React from "react";
import Layout from "../components/Layout";

const MovieDetail = ({ props: popular }) => {
  return (
    <Layout>
      {/* {props.popular.results.map(test => {
        return <h1>{test.id}</h1>;
      })} */}
      {/* {console.log(props.popular.results.map(test => test.id))} */}
      {/* {console.log(popular.results)} */}
    </Layout>
  );
};

export default MovieDetail;
