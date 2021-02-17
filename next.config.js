const withImages = require("next-images");
// const withPlugins = require("next-compose-plugins");

module.exports = withImages({
  env: {
    NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
  },

  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
});

module.exports = {
  images: {
    domains: ["https://image.tmdb.org/t/p/w500"],
  },
};
