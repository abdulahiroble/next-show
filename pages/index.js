import Fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Movies from "../components/Movies";
import Slider from "react-slick";

const index = props => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Layout>
      <h2>Popular</h2>
      <Slider {...settings}>
        {props.popular.results.map(popularity => {
          return (
            <ul className="list-group">
              <li className="list-group-item">
                <div>{popularity.vote_average}</div>
                <h3> {popularity.title}</h3>
                <em>{popularity.release_date}</em> <br /> <br />
                <img
                  src={`https://image.tmdb.org/t/p/w200${popularity.poster_path}`}
                  alt="poster"
                />
                <br /> <br />
                <p>{popularity.overview}</p>
              </li>
            </ul>
          );
        })}
      </Slider>
      <h2>Top Rated</h2>
      <Slider {...settings}>
        {props.rated.results.map(rating => {
          return (
            <ul className="list-group">
              <li className="list-group-item">
                <div>{rating.vote_average}</div>
                <h3> {rating.title}</h3>
                <em>{rating.release_date}</em> <br /> <br />
                <img
                  src={`https://image.tmdb.org/t/p/w200${rating.poster_path}`}
                  alt="poster"
                />
                <br /> <br />
                <p>{rating.overview}</p>
              </li>
            </ul>
          );
        })}
      </Slider>
      <h2>Upcoming</h2>
      <Slider {...settings}>
        {props.upcoming.results.map(soon => {
          return (
            <ul className="list-group">
              <li className="list-group-item">
                <div>{soon.vote_average}</div>
                <h3> {soon.title}</h3>
                <em>{soon.release_date}</em> <br /> <br />
                <img
                  src={`https://image.tmdb.org/t/p/w200${soon.poster_path}`}
                  alt="poster"
                />
                <br /> <br />
                <p>{soon.overview}</p>
              </li>
            </ul>
          );
        })}
      </Slider>
      <h2>Now Playing</h2>
      <Slider {...settings}>
        {props.playing.results.map(playing => {
          return (
            <ul className="list-group">
              <li className="list-group-item">
                <div>{playing.vote_average}</div>
                <h3> {playing.title}</h3>
                <em>{playing.release_date}</em> <br /> <br />
                <img
                  src={`https://image.tmdb.org/t/p/w200${playing.poster_path}`}
                  alt="poster"
                />
                <br /> <br />
                <p>{playing.overview}</p>
              </li>
            </ul>
          );
        })}
      </Slider>
    </Layout>
  );
};

index.getInitialProps = async function() {
  // Popular Movies
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=3e5072126511096a6377f77c742f2864"
  );

  // Top rated movies
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=3e5072126511096a6377f77c742f2864"
  );

  // Upcoming
  const answer = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=3e5072126511096a6377f77c742f2864"
  );

  // Now Playing
  const reply = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=3e5072126511096a6377f77c742f2864"
  );

  const popular = await res.json();
  const rated = await response.json();
  const upcoming = await answer.json();
  const playing = await reply.json();

  return {
    popular: popular,
    rated: rated,
    upcoming: upcoming,
    playing: playing
  };
};

export default index;
