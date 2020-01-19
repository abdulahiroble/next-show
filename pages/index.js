import React from "react";
import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout>
      <h1>Stream Movies on Moviecloud</h1>

      <button>Movies</button>

      <h2>Upcoming</h2>
      <h2>Popular</h2>
      <h2>Now Playing</h2>
      <h2>Top Rated</h2>
    </Layout>
  );
};

export default index;
