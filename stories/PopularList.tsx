import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { StarIcon } from "../components/StarIcon";
import { useRouter } from "next/router";

export const PopularList = (props) => {
  const router = useRouter();

  console.log(router);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
  };
  return (
    <>
      <div className="text-2xl text-white uppercase tracking-wide">
        Populære
      </div>
      <div className="w-9/12 mx-auto">
        <Slider {...settings}>
          {props.popular.results.map((popularity) => {
            return (
              <ul className="">
                <Link
                  href={{
                    pathname: "MovieDetail",
                    query: {
                      id: popularity.id,
                      rating: popularity.vote_average,
                      title: popularity.title,
                      summary: popularity.overview,
                      thumbnail: `https://image.tmdb.org/t/p/w200${popularity.poster_path}`,
                    },
                  }}
                  as={`/MovieDetail/${popularity.id}`}
                >
                  <li key={popularity.id}>
                    <div className="mx-auto">
                      <div className="flex flex-col absolute bg-black opacity-70 p-1.5 text-white lg:ml-40">
                        <div>
                          <StarIcon />
                        </div>
                        {popularity.vote_average}
                      </div>
                      <img
                        src={`https://image.tmdb.org/t/p/w200${popularity.poster_path}`}
                        alt="poster"
                        className="mx-auto"
                      />
                    </div>
                  </li>
                </Link>
              </ul>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

// PopularList.getInitialProps = async function ({ query }) {
//   // Popular series
//   const res = await fetch(
//     `https://api.themoviedb.org/3/tv/popular?api_key=3e5072126511096a6377f77c742f2864&language=da&page=1`
//   );

//   console.log(res);

//   const popular = await res.json();

//   return {
//     popular: popular,
//     query,
//   };
// };
