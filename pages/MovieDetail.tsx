import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { useRouter } from "next/router";

const MovieDetail = ({ details, trailer, providers }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };

  const router = useRouter();

  console.log(providers);

  console.log(router);
  return (
    <Layout>
      <div className="flex flex-col w-9/12 mx-auto">
        <div className="mb-5">
          <img
            src={`${router.query.thumbnail}`}
            className="w-9/12 sm:max-w-sm"
          />
        </div>

        <div>
          <div className="text-2xl font-bold">
            <div className="mb-3">Bedømmelse: {router.query.rating}</div>
            <div>Genre: {router.query.genre}</div>
          </div>
        </div>
      </div>

      <div className="w-9/12 mx-auto my-5">
        <div className="text-3xl font-bold mb-2 ">Resume</div>
        <div className="text-base sm:text-lg">
          {router.query.summary ? (
            router.query.summary
          ) : (
            <p>intet resume endnu</p>
          )}
        </div>
      </div>

      <div className="w-9/12 mx-auto">
        <div className="text-3xl font-bold">Sæsoner</div>
        <Slider {...settings}>
          {details.seasons.map((details) => {
            return (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${details.poster_path}`}
                  alt=""
                  style={{ marginLeft: "20%" }}
                  className="w-9/12 mx-auto sm:max-w-sm mt-3 "
                />
                <div className="text-center mt-3">
                  <div className="text-2xl font-bold">
                    <b>{details.name}</b>
                  </div>
                  <div className="text-base mb-5">
                    Først udsendt: {details.air_date}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="w-9/12 mx-auto">
        <div className="text-3xl">
          <div className="mb-3 mt-3 font-bold">Trailers</div>
          {trailer.results.map((youtube) => {
            return (
              <div>
                <iframe
                  height="300"
                  width="300"
                  className="lg:h-96 lg:max-w-screen-lg mx-auto h-44 sm:w-full md:max-w-xl sm:h-64"
                  src={`https://www.youtube.com/embed/${youtube.key}`}
                ></iframe>
                <br />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        {providers.results.DK.flatrate.map((test) => {
          if (test.provider_name == "C More") {
            return (
              <a
                href="https://track.adtraction.com/t/t?a=1275838043&as=1580579680&t=2&tk=1"
                target="_blank"
                className="text-center"
              >
                Se serie på C More!
              </a>
            );
          } else if (test.provider_name == "Viaplay") {
            return (
              <a
                href="https://viaplay.dk/"
                target="_blank"
                className="text-center"
              >
                Se serie på Viaplay!
              </a>
            );
          }
        })}
      </div>
    </Layout>
  );
};

MovieDetail.getInitialProps = async function (router: { query: { id: any } }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${router.query.id}?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da
    `
  );

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${router.query.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=en-US
    `
  );

  const provider = await fetch(
    `https://api.themoviedb.org/3/tv/${router.query.id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_API_SECRET}
    `
  );

  // https://api.themoviedb.org/3/tv/79611/watch/providers?api_key=3e5072126511096a6377f77c742f2864

  const details = await res.json();
  const trailer = await response.json();
  const providers = await provider.json();

  return { details, trailer, providers };
};

export default MovieDetail;
