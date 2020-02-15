import fetch from "isomorphic-unfetch";
import React from "react";
import Layout from "../components/Layout";

const MovieDetail = ({
  url: {
    query: { id, title, rating, thumbnail, genre, summary, reviews, hej }
  },
  props
}) => {
  return (
    <Layout>
      {/* {console.log(props.show)} */}
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

      <h2>Trailers</h2>

      <h2>Popular Reviews</h2>
      {reviews}
    </Layout>
  );
};

// MovieDetail.getInitialProps = async function(query) {
//   // const { id } = url.query;
//   const res = await fetch(query.reviews);
//   const show = await res.json();

//   return {
//     query,
//     show
//   };
// };

export default MovieDetail;
