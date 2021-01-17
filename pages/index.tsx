import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Link from "next/link";
import Head from "next/head";
import { StarIcon } from "../components/StarIcon";

const index = (props: {
  popular: { results: any[] };
  genres: { genres: any[] };
  rated: { results: any[] };
  playing: { results: any[] };
}) => {
  <Head>
    <meta
      name="description"
      content="Få indblik hvilke serier der er værd at se baseret på brugeranmeldser"
    />
    <title>
      Serier Man Skal Se | Populære serier baseret på brugerandmeldser
    </title>
  </Head>;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
  };
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    swipe: false,
  };
  return (
    <Layout>
      <style jsx>{`
        @media (min-width: 1280px) {
          .populære-poster,
          .udsendes,
          .bedømte {
            max-width: 100% !important;
          }

          .test {
            width: 35%;
          }

          // .populær {
          //   width: 100% !important;
          // }

          // li {
          //   margin-left: 27% !important;
          //   padding: 0 !important;
          // }
        }
      `}</style>
      <Slider {...setting}>
        {props.popular.results.map((popularity) => {
          return (
            <ul>
              <Link
                href={{
                  pathname: "MovieDetail",
                  query: {
                    id: popularity.id,
                    rating: popularity.vote_average,
                    title: popularity.title,
                    summary: popularity.overview,
                    genre: props.genres.genres.map((genre) => {
                      if (genre.id === popularity.genre_ids[0]) {
                        return genre.name;
                      }
                    }),
                    thumbnail: `https://image.tmdb.org/t/p/w200${popularity.poster_path}`,
                  },
                }}
                as={`/MovieDetail/${popularity.id}`}
              >
                <li
                  style={{ listStyleType: "none", cursor: "pointer" }}
                  key={popularity.id}
                  className="test"
                >
                  <div
                    style={{ position: "relative", marginLeft: "-35px" }}
                    id="seneste"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${popularity.poster_path}`}
                      alt="poster"
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "90%",
                        opacity: "0.4",
                      }}
                      className="poster"
                    />
                    <br />
                    <h2
                      style={{
                        color: "#fff",
                        position: "absolute",
                        bottom: "80%",
                        left: "12%",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                      }}
                    >
                      Seneste
                    </h2>
                    <h3
                      style={{
                        color: "#fff",
                        position: "absolute",
                        bottom: "30%",
                        left: "8%",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {popularity.original_name}
                    </h3>

                    <h4
                      style={{
                        position: "absolute",
                        color: "#fff",
                        opacity: "0.7",
                        bottom: "12%",
                        left: "8%",
                      }}
                    >
                      {popularity.vote_average} Bedømmelse |
                      {props.genres.genres.map((genre) => {
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
      <div className="text-2xl text-white uppercase tracking-wide">
        Populære
      </div>
      <Slider {...settings}>
        {props.popular.results.map((popularity) => {
          return (
            <ul>
              <Link
                href={{
                  pathname: "MovieDetail",
                  query: {
                    id: popularity.id,
                    rating: popularity.vote_average,
                    title: popularity.title,
                    summary: popularity.overview,
                    genre: props.genres.genres.map((genre) => {
                      if (genre.id === popularity.genre_ids[0]) {
                        return genre.name;
                      }
                    }),
                    thumbnail: `https://image.tmdb.org/t/p/w200${popularity.poster_path}`,
                  },
                }}
                as={`/MovieDetail/${popularity.id}`}
              >
                <li key={popularity.id} className="populær">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "absolute",
                      marginTop: "0px",
                      padding: "6px",
                      color: "#fff",
                      backgroundColor: "#000",
                      opacity: "0.7",
                    }}
                  >
                    <div>
                      <StarIcon />
                    </div>

                    {popularity.vote_average}
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${popularity.poster_path}`}
                    alt="poster"
                    style={{ maxWidth: "100px" }}
                    className="populære-poster"
                  />
                  <br />
                  <h6 style={{ textAlign: "center", color: "#fff" }}>
                    {" "}
                    {popularity.title}
                  </h6>
                  <div className="text-left text-xl">
                    {" "}
                    {props.genres.genres.map((genre) => {
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
          letterSpacing: "2px",
        }}
      >
        Bedst Bedømte
      </h2>
      <Slider {...settings}>
        {props.rated.results.map((rating) => {
          return (
            <ul>
              <Link
                href={{
                  pathname: "MovieDetail",
                  query: {
                    id: rating.id,
                    rating: rating.vote_average,
                    title: rating.title,
                    summary: rating.overview,
                    genre: props.genres.genres.map((genre) => {
                      if (genre.id === rating.genre_ids[0]) {
                        return genre.name;
                      }
                    }),
                    thumbnail: `https://image.tmdb.org/t/p/w200${rating.poster_path}`,
                  },
                }}
                as={`/MovieDetail/${rating.id}`}
              >
                <li key={rating.id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "absolute",
                      marginTop: "0px",
                      padding: "6px",
                      color: "#fff",
                      backgroundColor: "#000",
                      opacity: "0.7",
                    }}
                  >
                    <div>
                      <StarIcon />
                    </div>
                    {rating.vote_average}
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${rating.poster_path}`}
                    alt="poster"
                    style={{ maxWidth: "100px" }}
                    className="bedømte"
                  />
                  <br />
                  <h6 style={{ textAlign: "center", color: "#fff" }}>
                    {" "}
                    {rating.title}
                  </h6>
                  <div className="text-left text-xl">
                    {" "}
                    {props.genres.genres.map((genre) => {
                      if (genre.id === rating.genre_ids[0]) {
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
          letterSpacing: "2px",
        }}
      >
        Udsendes I Dag
      </h2>
      <Slider {...settings}>
        {props.playing.results.map((play) => {
          return (
            <ul>
              <Link
                href={{
                  pathname: "MovieDetail",
                  query: {
                    id: play.id,
                    play: play.vote_average,
                    title: play.title,
                    summary: play.overview,
                    genre: props.genres.genres.map((genre) => {
                      if (genre.id === play.genre_ids[0]) {
                        return genre.name;
                      }
                    }),
                    thumbnail: `https://image.tmdb.org/t/p/w200${play.poster_path}`,
                  },
                }}
                as={`/MovieDetail/${play.id}`}
              >
                <li key={play.id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "absolute",
                      marginTop: "0px",
                      padding: "6px",
                      color: "#fff",
                      backgroundColor: "#000",
                      opacity: "0.7",
                    }}
                  >
                    <div>
                      <StarIcon />
                    </div>
                    {play.vote_average}
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${play.poster_path}`}
                    alt="poster"
                    style={{ maxWidth: "100px" }}
                    className="udsendes"
                  />
                  <br />
                  <h6 style={{ textAlign: "center", color: "#fff" }}>
                    {" "}
                    {play.title}
                  </h6>
                  <div className="text-left text-xl">
                    {" "}
                    {props.genres.genres.map((genre) => {
                      if (genre.id === play.genre_ids[0]) {
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
    </Layout>
  );
};

index.getInitialProps = async function ({ query }) {
  // Popular Movies
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da&page=1`
  );

  // Top rated movies
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da&page=1`
  );

  // Upcoming
  const answer = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_SECRET}`
  );

  // Now Playing
  const reply = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da&page=1`
  );

  // Genres
  const genre = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_SECRET}`
  );

  const popular = await res.json();
  const rated = await response.json();
  const upcoming = await answer.json();
  const playing = await reply.json();
  const genres = await genre.json();

  return {
    popular: popular,
    rated: rated,
    upcoming: upcoming,
    playing,
    genres,
    query,
  };
};

export default index;
