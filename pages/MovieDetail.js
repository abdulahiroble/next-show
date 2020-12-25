import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { useRouter } from "next/router";

const MovieDetail = ({ details, trailer }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
  };

  const router = useRouter();

  console.log(router);
  return (
    <Layout>
      <style jsx>{`
        @media (min-width: 1280px) {
          #noflex {
            display: flex;
            flex-direction: column !important;
          }

          .seasons {
            width: 40%;
            margin-left: 28% !important;
          }

          img {
            width: 30%;
          }

          // .trailer {
          //   width: 100%;
          //   height: 600px;
          // }
        }
      `}</style>
      <div id="noflex">
        <div>
          <img src={`${router.query.thumbnail}`} alt="" className="poster" />
        </div>

        <br />

        <div>
          <div className="text-2xl">
            <div>Bedømmelse: {router.query.rating}</div>
            <div>Genre: {router.query.genre}</div>
          </div>
        </div>
      </div>
      <br />
      <div className="text-2xl">Resume</div>
      <div className="text-base sm:text-xl">
        {router.query.summary ? (
          router.query.summary
        ) : (
          <p>intet resume endnu</p>
        )}
      </div>
      <br /> <br />
      <div className="text-3xl">Sæsoner</div>
      <Slider>
        {details.seasons.map((details) => {
          return (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200${details.poster_path}`}
                alt=""
                style={{ marginLeft: "20%" }}
                className="seasons"
              />
              <br /> <br />
              <div>
                <h4>
                  <b>{details.name}</b>
                </h4>
                <p>Først udsendt: {details.air_date}</p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="text-3xl">
        Trailer
        {trailer.results.map((test) => {
          return (
            <div>
              {" "}
              <iframe
                width="500"
                height="500"
                className="w-full"
                src={`https://www.youtube.com/embed/${test.key}`}
              ></iframe>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

MovieDetail.getInitialProps = async function (router) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${router.query.id}?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da
    `
  );

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${router.query.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=en-US
    `
  );

  const details = await res.json();
  const trailer = await response.json();

  return { details, trailer };
};

export default MovieDetail;
