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
        {props.movie.results.map(movies => {
          return (
            <ul className="list-group">
              <li className="list-group-item">
                <h3> {movies.title}</h3>
                <em>{movies.release_date}</em> <br /> <br />
                <img
                  src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                  alt="poster"
                />
                <br /> <br />
                <p>{movies.overview}</p>
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

  // const res = await fetch(
  //   "https://image.tmdb.org/t/p/w500/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg"
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
