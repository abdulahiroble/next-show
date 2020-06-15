const withImages = require("next-images");
// const withSass = require("@zeit/next-sass");
// const sitemap = require("nextjs-sitemap-generator");

module.exports = withImages({
  env: {
    API_SECRET: process.env.API_SECRET,
  },
});

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
