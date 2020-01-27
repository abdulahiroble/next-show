import React from "react";
import Slider from "react-slick";

const Movies = ({ popular, rated }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {/* {popular.results.map(popularity => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <div>{popularity.vote_average}</div>
              <h3> {popularity.title}</h3>
              <em>{popularity.release_date}</em> <br /> <br />
              <img
                src={`https://image.tmdb.org/t/p/w200${popularity.poster_path}`}
                alt="poster"
              />
              <br /> <br />
              <p>{popularity.overview}</p>
            </li>
          </ul>
        );
      })}
      {rated.results.map(rating => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <div>{rating.vote_average}</div>
              <h3> {rating.title}</h3>
              <em>{rating.release_date}</em> <br /> <br />
              <img
                src={`https://image.tmdb.org/t/p/w200${rating.poster_path}`}
                alt="poster"
              />
              <br /> <br />
              <p>{rating.overview}</p>
            </li>
          </ul>
        );
      })} */}
    </Slider>
  );
};

export default Movies;
