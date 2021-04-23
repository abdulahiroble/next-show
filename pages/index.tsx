import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Link from "next/link";
import { StarIcon } from "../components/StarIcon";
import Image from "next/image";
// import { Image } from "@chakra-ui/react"
import { NextSeo } from "next-seo";
import useSWR from 'swr'
import { Skeleton, SkeletonCircle, SkeletonText, Stack, Box, Heading } from "@chakra-ui/react"

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
        {Posts(props)}
        <Slider {...setting}>
          {props.popular.results.map((popularity) => {
            return (
              <Link
                href={{
                  pathname: "SerieInfo",
                  query: {
                    id: popularity.id,
                    rating: popularity.vote_average,
                    original_name: popularity.original_name,
                    summary: popularity.overview,
                    genre: props.genres.genres.map((genre) => {
                      if (genre.id === popularity.genre_ids) {
                        return genre.name;
                      }
                    }),
                    thumbnail: `https://image.tmdb.org/t/p/w500${popularity.poster_path}`,
                  },
                }}
              >
                <div className="text-center">
                  <div className="h-full cursor-pointer w-full sm:max-h-80">
                    <Image
                      alt="banner"
                      src={`https://image.tmdb.org/t/p/w500${popularity.poster_path}`}
                      className="opacity-20"
                      layout="responsive"
                      width={700}
                      height={400}
                      quality={75}
                    />
                  </div>
                  <div className="-mt-24 sm:-mt-20">
                    <Box boxShadow="lg" padding="6">
                      <SkeletonText mt="4" noOfLines={2} spacing="4">
                        <div className="text-xl text-white font-bold mx-auto text-center sm:text-3xl">

                          {popularity.original_name}


                          <div className="text-xl pb-2 text-white font-bold mx-auto text-center sm:text-3xl sm:pb-3">
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
                      </SkeletonText>
                    </Box>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>

        <div className="mt-3 w-9/12 mx-auto">
          <div className="text-2xl text-white uppercase tracking-wide mb-3">
            Populære
          </div>
          <div className="">

            <Slider {...settings}>

              {props.popular.results.map((popularity) => {
                return (
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

                  >

                    <div
                      className="cursor-pointer mx-auto" style={{ maxWidth: 200 }}>
                      <Box>
                        <Skeleton>
                          <div className="justify-self-start absolute bg-black opacity-70 p-2 text-white z-10">
                            <StarIcon />
                            {popularity.vote_average}
                          </div>
                        </Skeleton>
                        <Box>
                          <Skeleton>
                            <Image
                              width={200}
                              height={300}
                              src="/1200x0.jpg"
                              alt="banner"
                            />
                          </Skeleton>
                        </Box>
                        <SkeletonText mt="4" noOfLines={1} spacing="4" isLoaded={!popularity} ><div className="text-center text-sm px-2 italic sm:text-md">Tryk for mere info 👆</div></SkeletonText>
                      </Box>
                    </div>
                  </Link>
                );
              })}

            </Slider>
          </div>
        </div>

        <div className="w-9/12 mx-auto my-4">
          <div className="text-2xl text-white uppercase tracking-wide mb-3">
            Udsendes i øjeblikket
          </div>
          <Slider {...settings}>
            {props.rated.results.map((rating) => {
              return (
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

                >
                  <div
                    className="cursor-pointer mx-auto"
                    style={{ maxWidth: 200 }}
                  >
                    <div className="justify-self-start absolute bg-black opacity-70 p-2 text-white z-10">
                      <div>
                        <StarIcon />
                      </div>
                      {rating.vote_average}
                    </div>
                    <Image
                      width={200}
                      height={300}
                      src={`https://image.tmdb.org/t/p/w500${rating.poster_path}`}
                      alt="banner"
                    />
                    <div className="text-center text-sm px-2 italic sm:text-md">Tryk for mere info 👆</div>
                  </div>
                </Link>
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

                >
                  <div
                    className="cursor-pointer mx-auto"
                    style={{ maxWidth: 200 }}
                  >
                    <div className="justify-self-start absolute bg-black opacity-70 p-2 text-white z-10">
                      <StarIcon />
                      {play.vote_average}
                    </div>
                    <Image
                      width={200}
                      height={300}
                      src={`https://image.tmdb.org/t/p/w500${play.poster_path}`}
                      alt="banner"
                    />
                    <div className="text-center text-sm px-2 italic sm:text-md">Tryk for mere info 👆</div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </Layout>
    </>
  );
};


const fetcher = (url: RequestInfo) => fetch(url).then(r => r.json())

export async function getStaticProps() {


  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.

  // Popular
  const popular = await fetcher(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da&page=1`)

  // Genre
  const genres = await fetcher(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_SECRET}`
  );

  // Top rated series
  const rated = await fetcher(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da&page=1`
  );


  // Now Playing
  const playing = await fetcher(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da&page=1`
  );


  return { props: { popular, genres, rated, playing }, revalidate: 1 }
}

export function Posts(props) {
  // Here the `fetcher` function will be executed on the client-side.
  const { data, error } = useSWR(props, fetcher, { initialData: props })

  // if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <></>

}

export default index;
