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
              src={`https://www.youtube.com/embed/${test.key}`}
            ></iframe>
          </div>
        );
      })}
      {/* <h2>Skuespillere</h2>
      <Slider {...settings}>
        {cast.cast.map((test) => {
          return (
            <ul>
              <li style={{ listStyleType: "none" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${test.profile_path}`}
                  alt="poster"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "80%",
                  }}
                />
                {test.name}
              </li>
            </ul>
          );
        })}
      </Slider>
      <h2>Trailers</h2>
      <h2>Anmeldelser</h2>
      {show.results.map((review) => {
        return (
          <ul>
            <li style={{ listStyleType: "none" }}>
              <h3>{review.author}</h3>
            </li>
            <p
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "10",
              }}
            >
              {review.content}
            </p>
            <a href={review.url} target="_blank">
              Read Full Review
            </a>
          </ul>
        );
      })} */}
    </Layout>
  );
};

MovieDetail.getInitialProps = async function (url) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${url.query.id}?api_key=${process.env.API_SECRET}&language=da
    `
  );

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${url.query.id}/videos?api_key=${process.env.API_SECRET}&language=en-U"
    `
  );

  const details = await res.json();
  const trailer = await response.json();

  // console.log(`Details: ${details}`);
  console.log(`Trailer: ${trailer.id}`);

  return { details, trailer };
};

export default MovieDetail;
