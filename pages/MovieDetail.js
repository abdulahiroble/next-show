import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";

const MovieDetail = ({
  details,
  url: {
    query: { title, rating, thumbnail, genre, summary, id }
  }
}) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false
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
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        id="noflex"
      >
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
      {details.seasons.map(test => {
        return (
          <div style={{ padding: "2px 16px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${test.poster_path}`}
              alt=""
            />
            <br /> <br />
            <div>
              <h4>
                <b>{test.name}</b>
              </h4>
              <p>Først udsendt: {test.air_date}</p>
            </div>
          </div>
        );
      })}
      <br />
      <a
        href="http://www.amazon.com/tryprimefree?tag=serier20-20"
        target="_blank"
        style={{
          color: "#fff",
          maxWidth: "500px",
          padding: "5px 15px",
          textAlign: "center",
          backgroundColor: "#f90",
          borderColor: "#f90",
          textDecoration: "none"
        }}
      >
        {" "}
        Stream {details.name} på Amazon Prime
      </a>
      {/* {details.results.map(test => test.original_name)} */}
      {/* <h2>Skuespillere</h2>
      <Slider {...settings}>
        {cast.cast.map(test => {
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
                    width: "80%"
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
      {show.results.map(review => {
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
                WebkitLineClamp: "10"
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

MovieDetail.getInitialProps = async function(url) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${url.query.id}?api_key=3e5072126511096a6377f77c742f2864&language=da
    `
  );

  const details = await res.json();

  console.log(`Details: ${details}`);

  return { details };
};

export default MovieDetail;
