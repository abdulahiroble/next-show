import Fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";

import Movies from "../components/Movies";

const index = props => {
  return (
    <Layout>
      <h1>Stream Movies on Moviecloud</h1>

      <button>Movies</button>

      <h2>Upcoming</h2>

      <h2>Popular</h2>
      <div>
        {props.movie.results.map(test => {
          return (
            <ul className="list-group">
              <li className="list-group-item">
                <h3> {test.title}</h3>
                <em>{test.release_date}</em> <br />
                <a href={test.poster_path}>img</a>
                <div>{test.poster_path}</div>
                <p>{test.overview}</p>
              </li>
            </ul>
          );
        })}
      </div>
      {console.log(props.movie)}

      <h2>Now Playing</h2>

      <h2>Top Rated</h2>
    </Layout>
  );
};

index.getInitialProps = async function() {
  // const res = await fetch(
  //   "https://api.themoviedb.org/3/movie/550?api_key=3e5072126511096a6377f77c742f2864"
  // );

  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=3e5072126511096a6377f77c742f2864"
  );

  const data = await res.json();

  return {
    movie: data
  };
};

export default index;
