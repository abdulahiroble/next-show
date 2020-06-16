const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "<your_website_base_url>",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "static/",
});

module.exports = withImages(
  withSass({
    env: {
      API_SECRET: process.env.API_SECRET,
    },

    exportPathMap: function () {
      return {
        "/": { page: "/" },
      };
    },
  })
);

// module.exports = withImages(
//   sitemap(
//     withSass({
//       env: {
//         API_SECRET: process.env.API_SECRET,
//       },

//       baseUrl: "https://seriermanskalse.dk",
//       pagesDirectory: __dirname + "/pages",
//       targetDirectory: "static/",

//       exportPathMap: function () {
//         return {
//           "/": { page: "/" },
//         };
//       },
//     })
//   )
// );

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
