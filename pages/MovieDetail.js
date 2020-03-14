import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";

const MovieDetail = ({
  details,
  url: {
    query: { title, rating, thumbnail, genre, summary }
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
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${details.poster_path}`}
            alt=""
          />
        </div>

        <div>
          <h3>{title} </h3>

          <h4>{rating}</h4>

          <h4>{genre} </h4>
        </div>
      </div>

      <br />

      <h2>Resume</h2>
      {summary ? summary : <p>intet resume endnu</p>}

      <h2>Episoder</h2>

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
