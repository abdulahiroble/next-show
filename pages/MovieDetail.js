import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";

const MovieDetail = ({
  details,
  trailer,
  url: {
    query: { title, rating, thumbnail, genre, summary, id },
  },
}) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
  };
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
          }

          img {
            width: 50%;
          }

          .trailer {
            width: 100%;
            height: 600px;
          }

          // .poster {
          //   margin-right: 55%;
          //   display: column;
          // }

          // .info {
          //   margin-left: 75%;
          // }
        }
      `}</style>
      <div id="noflex">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${details.poster_path}`}
            alt=""
            className="poster"
          />
        </div>

        <br />

        <div>
          <div className="info">
            <h3>{title} </h3>
            <h4>Bedømmelse: {rating}</h4>
            <h4>Genre: {genre}</h4>
          </div>
        </div>
      </div>
      <br />
      <h2>Resume</h2>
      {summary ? summary : <p>intet resume endnu</p>}
      <br /> <br />
      <h2>Sæsoner</h2>
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
      <h2>Trailer</h2>
      {trailer.results.map((test) => {
        return (
          <div>
            {" "}
            <iframe
              width="300"
              height="250"
              maxLength="11"
              className="trailer"
              src={`https://www.youtube.com/embed/${test.key}`}
            ></iframe>
          </div>
        );
      })}
    </Layout>
  );
};

MovieDetail.getInitialProps = async function (url) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${url.query.id}?api_key=3e5072126511096a6377f77c742f2864&language=da
    `
  );

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${url.query.id}/videos?api_key=3e5072126511096a6377f77c742f2864&language=en-U"
    `
  );

  const details = await res.json();
  const trailer = await response.json();

  console.log(`Trailer: ${trailer.id}`);

  return { details, trailer };
};

export default MovieDetail;
