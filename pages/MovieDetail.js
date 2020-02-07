import React from "react";
import Layout from "../components/Layout";

const MovieDetail = ({
  url: {
    query: { name, thumbnail }
  }
}) => {
  return (
    <Layout>
      {name} <br /> <img src={thumbnail} alt="" />
    </Layout>
  );
};

export default MovieDetail;
