import React, { Component } from "react";
import Slider from "react-slick";

class Movies extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this.props.movie.results.map(movies => {
          return (
            <ul className="list-group">
              <li className="list-group-item">
                <h3> {movies.title}</h3>
                <em>{movies.release_date}</em> <br /> <br />
                <img
                  src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                  alt="poster"
                />
                <br /> <br />
                <p>{movies.overview}</p>
              </li>
            </ul>
          );
        })}
      </Slider>
    );
  }
}

export default Movies;
