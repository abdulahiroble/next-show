import React from "react";
import Layout from "../components/Layout";

const MovieDetail = ({
  url: {
    query: { title, rating, thumbnail, genre }
  }
}) => {
  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio
        asperiores incidunt eum accusamus harum maxime cupiditate molestiae
        autem tempore perferendis numquam eius aut, repellendus, modi pariatur?
        Quod, quasi dolores!Facilis nulla, eveniet, sapiente, sequi maiores ea
        rem omnis vel molestias molestiae quia distinctio aspernatur saepe vero
        maxime quis assumenda voluptate odio asperiores rerum quidem ad. Dolorem
        excepturi tempore aperiam!
      </p>

      <h2>Cast</h2>

      <h2>Trailers</h2>

      <h2>Popular Reviews</h2>
    </Layout>
  );
};

export default MovieDetail;
