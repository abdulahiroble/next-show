import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";

const MovieDetail = ({
  show,
  cast,
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
            src={thumbnail}
            alt=""
            style={{
              height: "100%",
              width: "100%"
            }}
          />
        </div>

        <div>
          <h3>{title} </h3>

          <h4>{rating}</h4>

          <h4>{genre}</h4>
        </div>
      </div>

      <br />

      <h2>Summary</h2>
      <p>{summary}</p>

      <h2>Cast</h2>
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

      <h2>Popular Reviews</h2>
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
                WebkitLineClamp: "10" /* number of lines to show */
              }}
            >
              {review.content}
            </p>
            <a href={review.url} target="_blank">
              Read Full Review
            </a>
          </ul>
        );
      })}
    </Layout>
  );
};

MovieDetail.getInitialProps = async function(url) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${url.query.id}/reviews?api_key=3e5072126511096a6377f77c742f2864`
  );
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${url.query.id}/credits?api_key=3e5072126511096a6377f77c742f2864`
  );

  const cast = await response.json();
  const show = await res.json();

  console.log(`Review Authors: ${show.results.map(test => test.author)}`);

  return { show, cast };
};

export default MovieDetail;
