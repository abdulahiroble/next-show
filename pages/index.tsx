import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Link from "next/link";
// import Head from "next/head";
import { StarIcon } from "../components/StarIcon";
import Image from "next/image";
// import "../components/layoutPage.module.css";
import { NextSeo } from "next-seo";

const index = (props) => {
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
    <>
      <NextSeo
        title="Serier Man Skal Se | Populære serier baseret på brugerscorer"
        description="Gennemse gode serier fra 2020 og 2021. Få indblik i hvilke serier der er værd at se baseret på hvor manger stjerne en serie har fået"
      />
      <Layout>
        <Slider {...setting}>
          {props.popular.results.map((popularity) => {
            return (
              <ul>
                <Link
                  href={{
                    pathname: "SerieInfo",
                    query: {
                      id: popularity.id,
                      rating: popularity.vote_average,
                      original_name: popularity.original_name,
                      summary: popularity.overview,
                      genre: props.genres.genres.map((genre) => {
                        if (genre.id === popularity.genre_ids[0]) {
                          return genre.name;
                        }
                      }),
                      thumbnail: `https://image.tmdb.org/t/p/w500${popularity.poster_path}`,
                    },
                  }}
                  as={`/SerieInfo/${popularity.id}`}
                >
                  <li
                    style={{ listStyleType: "none", cursor: "pointer" }}
                    key={popularity.id}
                  >
                    <div className="text-center">
                      <div className="h-full w-full sm:max-h-80">
                        <Image
                          alt="banner"
                          src={`https://image.tmdb.org/t/p/w500${popularity.poster_path}`}
                          className="opacity-20"
                          layout="responsive"
                          width={700}
                          height={400}
                          quality={75}
                          loading="lazy"
                        />
                      </div>
                      <div className="-mt-24 sm:-mt-20">
                        <div className="text-2xl text-white font-bold mx-auto text-center">
                          {" "}
                          {popularity.original_name}
                          <div className="text-2xl text-white font-bold mx-auto text-center">
                            {popularity.vote_average} Bedømmelse |{" "}
                            {props.genres.genres.map((genre) => {
                              if (genre.id === popularity.genre_ids[0]) {
                                return genre.name;
                              } else {
                                return null;
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            );
          })}
        </Slider>

        <div className="w-9/12 mx-auto mt-3">
          <div className="text-2xl text-white uppercase tracking-wide mb-3">
            Populære
          </div>
          <Slider {...settings}>
            {props.popular.results.map((popularity) => {
              return (
                <ul className="">
                  <Link
                    href={{
                      pathname: "SerieInfo",
                      query: {
                        id: popularity.id,
                        rating: popularity.vote_average,
                        original_name: popularity.original_name,
                        summary: popularity.overview,
                        genre: props.genres.genres.map((genre) => {
                          if (genre.id === popularity.genre_ids[0]) {
                            return genre.name;
                          }
                        }),
                        thumbnail: `https://image.tmdb.org/t/p/w500${popularity.poster_path}`,
                      },
                    }}
                    as={`/SerieInfo/${popularity.id}`}
                  >
                    <li key={popularity.id} className="cursor-pointer">
                      <div className="lg:ml-32">
                        <div className="justify-self-start absolute bg-black opacity-70 p-1.5 text-white z-10">
                          <div>
                            <StarIcon />
                          </div>
                          {popularity.vote_average}
                        </div>

                        <Image
                          width={200}
                          height={300}
                          loading="lazy"
                          src={`https://image.tmdb.org/t/p/w500${popularity.poster_path}`}
                          alt="banner"
                        />
                      </div>
                    </li>
                  </Link>
                </ul>
              );
            })}
          </Slider>
        </div>
        <div className="w-9/12 mx-auto my-4">
          <div className="text-2xl text-white uppercase tracking-wide mb-3">
            Udsendes i øjeblikket
          </div>
          <Slider {...settings}>
            {props.rated.results.map((rating) => {
              return (
                <ul>
                  <Link
                    href={{
                      pathname: "SerieInfo",
                      query: {
                        id: rating.id,
                        rating: rating.vote_average,
                        original_name: rating.original_name,
                        summary: rating.overview,
                        genre: props.genres.genres.map((genre) => {
                          if (genre.id === rating.genre_ids[0]) {
                            return genre.name;
                          }
                        }),
                        thumbnail: `https://image.tmdb.org/t/p/w500${rating.poster_path}`,
                      },
                    }}
                    as={`/SerieInfo/${rating.id}`}
                  >
                    <li key={rating.id} className="cursor-pointer">
                      <div className="lg:ml-32">
                        <div className="justify-self-start absolute bg-black opacity-70 p-1.5 text-white z-10">
                          <div>
                            <StarIcon />
                          </div>
                          {rating.vote_average}
                        </div>
                        <Image
                          width={200}
                          height={300}
                          loading="lazy"
                          src={`https://image.tmdb.org/t/p/w500${rating.poster_path}`}
                          alt="banner"
                        />
                      </div>
                    </li>
                  </Link>
                </ul>
              );
            })}
          </Slider>
        </div>
        <div className="w-9/12 mx-auto">
          <div className="text-2xl text-white uppercase tracking-wide mb-3">
            Udsendes i dag
          </div>
          <Slider {...settings}>
            {props.playing.results.map((play) => {
              return (
                <ul>
                  <Link
                    href={{
                      pathname: "SerieInfo",
                      query: {
                        id: play.id,
                        rating: play.vote_average,
                        original_name: play.original_name,
                        summary: play.overview,
                        genre: props.genres.genres.map((genre) => {
                          if (genre.id === play.genre_ids[0]) {
                            return genre.name;
                          }
                        }),
                        thumbnail: `https://image.tmdb.org/t/p/w500${play.poster_path}`,
                      },
                    }}
                    as={`/SerieInfo/${play.id}`}
                  >
                    <li key={play.id} className="cursor-pointer">
                      <div className="lg:ml-32">
                        <div className="justify-self-start absolute bg-black opacity-70 p-1.5 text-white z-10">
                          <div>
                            <StarIcon />
                          </div>
                          {play.vote_average}
                        </div>
                        <Image
                          width={200}
                          height={300}
                          loading="lazy"
                          src={`https://image.tmdb.org/t/p/w500${play.poster_path}`}
                          alt="banner"
                        />
                      </div>
                    </li>
                  </Link>
                </ul>
              );
            })}
          </Slider>
        </div>
      </Layout>
    </>
  );
};

index.getInitialProps = async function ({ query }) {
  // Popular series
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da&page=1`
  );

  // Top rated series
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
