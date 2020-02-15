import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
// import Movies from "../components/Movies";
import Slider from "react-slick";
import Link from "next/link";
//import Router from 'next/router'

const index = props => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false
  };
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    swipe: false
  };
  return (
    <Layout>
      {/* {console.log(props.review.results.map(test => test.content))} */}
      {/* {console.log(props.popular.results.map(test => test.id))} */}
      {/* {console.log(props.genres.genres.map(test => test.id))}
      {console.log(props.genres.genres.map(test => test.name))} */}
      <Slider {...setting}>
        {props.popular.results.map(popularity => {
          return (
            <ul>
              <Link
                // href="/MovieDetail/[id]"
                // as={`/MovieDetail/${popularity.id}`}

                href={{
                  pathname: "MovieDetail",
                  query: {
                    id: popularity.id,
                    rating: popularity.vote_average,
                    title: popularity.title,
                    summary: popularity.overview,
                    genre: props.genres.genres.map(genre => {
                      if (genre.id === popularity.genre_ids[0]) {
                        return genre.name;
                      }
                    }),
                    thumbnail: `https://image.tmdb.org/t/p/w200${popularity.poster_path}`,
                    reviews: `https://api.themoviedb.org/3/movie/${popularity.id}/reviews?api_key=3e5072126511096a6377f77c742f2864`
                  }
                }}
                as={`/MovieDetail/${popularity.id}`}
              >
                <li
                  style={{ listStyleType: "none", cursor: "pointer" }}
                  key={popularity.id}
                >
                  <div style={{ position: "relative", marginLeft: "-35px" }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${popularity.poster_path}`}
                      alt="poster"
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "80%",
                        opacity: "0.4"
                      }}
                    />
                    <br />
                    <h2
                      style={{
                        color: "#fff",
                        position: "absolute",
                        bottom: "80%",
                        left: "12%",
                        fontWeight: "bold",
                        letterSpacing: "2px"
                      }}
                    >
                      Latest
                    </h2>
                    <h3
                      style={{
                        color: "#fff",
                        position: "absolute",
                        bottom: "20%",
                        left: "12%",
                        fontWeight: "bold"
                      }}
                    >
                      {" "}
                      {popularity.title}
                    </h3>

                    <h4
                      style={{
                        position: "absolute",
                        color: "#fff",
                        opacity: "0.7",
                        bottom: "12%",
                        left: "12%"
                      }}
                    >
                      {popularity.vote_average} Rating |
                      {props.genres.genres.map(genre => {
                        if (genre.id === popularity.genre_ids[0]) {
                          return genre.name;
                        } else {
                          return null;
                        }
                      })}
                    </h4>
                  </div>
                </li>
              </Link>
            </ul>
          );
        })}
      </Slider>
      <h2
        style={{
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}
      >
        Popular
      </h2>
      <Slider {...settings}>
        {props.popular.results.map(popularity => {
          return (
            <ul>
              <Link href="#">
                <li
                  style={{ listStyleType: "none", marginLeft: "-35px" }}
                  key={popularity.id}
                >
                  <div
                    style={{
                      position: "absolute",
                      marginTop: "7px",
                      padding: "6px",
                      color: "#fff",
                      backgroundColor: "#000",
                      opacity: "0.7"
                    }}
                  >
                    {popularity.vote_average}
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${popularity.poster_path}`}
                    alt="poster"
                    style={{ maxWidth: "100px" }}
                  />
                  <br />
                  <h6 style={{ textAlign: "center", color: "#fff" }}>
                    {" "}
                    {popularity.title}
                  </h6>
                  <div style={{ textAlign: "center" }}>
                    {" "}
                    {props.genres.genres.map(genre => {
                      if (genre.id === popularity.genre_ids[0]) {
                        return genre.name;
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </li>
              </Link>
            </ul>
          );
        })}
      </Slider>
      <h2
        style={{
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}
      >
        Top Rated
      </h2>
      <Slider {...settings}>
        {props.rated.results.map(rating => {
          return (
            <ul>
              <li
                style={{ listStyleType: "none", marginLeft: "-35px" }}
                key={rating.id}
              >
                <div
                  style={{
                    position: "absolute",
                    marginTop: "7px",
                    padding: "6px",
                    color: "#fff",
                    backgroundColor: "#000",
                    opacity: "0.7"
                  }}
                >
                  {rating.vote_average}
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${rating.poster_path}`}
                  alt="poster"
                  style={{ maxWidth: "100px" }}
                />
                <br />
                <h6 style={{ textAlign: "center", color: "#fff" }}>
                  {" "}
                  {rating.title}
                </h6>
                <div style={{ textAlign: "center" }}>
                  {" "}
                  {props.genres.genres.map(genre => {
                    if (genre.id === rating.genre_ids[0]) {
                      return genre.name;
                    } else {
                      return null;
                    }
                  })}
                </div>
              </li>
            </ul>
          );
        })}
      </Slider>
      <h2
        style={{
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}
      >
        Now Playing
      </h2>
      <Slider {...settings}>
        {props.playing.results.map(play => {
          return (
            <ul>
              <li
                style={{ listStyleType: "none", marginLeft: "-35px" }}
                key={play.id}
              >
                <div
                  style={{
                    position: "absolute",
                    marginTop: "7px",
                    padding: "6px",
                    color: "#fff",
                    backgroundColor: "#000",
                    opacity: "0.7"
                  }}
                >
                  {play.vote_average}
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${play.poster_path}`}
                  alt="poster"
                  style={{ maxWidth: "100px" }}
                />
                <br />
                <h6 style={{ textAlign: "center", color: "#fff" }}>
                  {" "}
                  {play.title}
                </h6>
                <div style={{ textAlign: "center" }}>
                  {" "}
                  {props.genres.genres.map(genre => {
                    if (genre.id === play.genre_ids[0]) {
                      return genre.name;
                    } else {
                      return null;
                    }
                  })}
                </div>
              </li>
            </ul>
          );
        })}
      </Slider>
      <h2
        style={{
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}
      >
        Upcoming
      </h2>
      <Slider {...settings}>
        {props.upcoming.results.map(soon => {
          return (
            <ul>
              <li
                style={{ listStyleType: "none", marginLeft: "-35px" }}
                key={soon.id}
              >
                <div
                  style={{
                    position: "absolute",
                    marginTop: "7px",
                    padding: "6px",
                    color: "#fff",
                    backgroundColor: "#000",
                    opacity: "0.7"
                  }}
                >
                  {soon.vote_average}
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${soon.poster_path}`}
                  alt="poster"
                  style={{ maxWidth: "100px" }}
                />
                <br />
                <h6 style={{ textAlign: "center", color: "#fff" }}>
                  {" "}
                  {soon.title}
                </h6>
                <div style={{ textAlign: "center" }}>
                  {" "}
                  {props.genres.genres.map(genre => {
                    if (genre.id === soon.genre_ids[0]) {
                      return genre.name;
                    } else {
                      return null;
                    }
                  })}
                </div>
              </li>
            </ul>
          );
        })}
      </Slider>
    </Layout>
  );
};

index.getInitialProps = async function({ query }) {
  // const { id } = query.id;

  // Popular Movies
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=3e5072126511096a6377f77c742f2864"
    // "https://api.themoviedb.org/3/movie/419704?api_key=3e5072126511096a6377f77c742f2864"
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

  // Genres
  const genre = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=3e5072126511096a6377f77c742f2864"
  );

  // const test = await fetch(
  //   "https://api.themoviedb.org/3/movie/419704/reviews?api_key=3e5072126511096a6377f77c742f2864"
  //  `https://api.themoviedb.org/3/movie/${query.id}/reviews?api_key=3e5072126511096a6377f77c742f2864`
  // );

  //"https://api.themoviedb.org/3/movie/419704/reviews?api_key=3e5072126511096a6377f77c742f2864&language=en-US&page=1"

  // const test2 = await test.json();

  const reviews = await fetch(
    `https://api.themoviedb.org/3/movie/${query.id}/reviews?api_key=3e5072126511096a6377f77c742f2864`
  );

  const popular = await res.json();
  const rated = await response.json();
  const upcoming = await answer.json();
  const playing = await reply.json();
  const genres = await genre.json();
  // const t = await test.json();
  const review = await reviews.json();

  return {
    popular: popular,
    rated: rated,
    upcoming: upcoming,
    playing,
    genres,
    query,
    review
  };
};

export default index;
