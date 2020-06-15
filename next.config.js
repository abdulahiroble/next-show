const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const sitemap = require("nextjs-sitemap-generator");

module.exports = withImages(
  sitemap(
    withSass({
      baseUrl: "https://seriermanskalse.dk",
      pagesDirectory: __dirname + "/pages",
      targetDirectory: "static/",

      exportPathMap: function () {
        return {
          "/": { page: "/" },
        };
      },

      env: {
        API_SECRET: process.env.API_SECRET,
      },
    })
  )
);

// module.exports = withSass(
//   withImages({
//     env: {
//       API_SECRET: process.env.API_SECRET,
//     },
//     exportPathMap: function () {
//       return {
//         "/": { page: "/" },
//       };
//     },
//     // sitemap ({
//     //   baseUrl: "https://seriermanskalse.dk/",
//     //   pagesDirectory: __dirname + "/pages",
//     //   targetDirectory : 'static/'
//     // })
//   })
// );
