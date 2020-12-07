const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
// const sitemap = require("nextjs-sitemap-generator");

// sitemap({
//   baseUrl: "https://seriermanskalse.dk",
//   pagesDirectory: __dirname + "/pages",
//   targetDirectory: "static/",
// });

module.exports = withImages(
  withSass({
    env: {
      NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
    },

    exportPathMap: function () {
      return {
        "/": { page: "/" },
      };
    },
  })
);
