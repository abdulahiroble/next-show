const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const sitemap = require("nextjs-sitemap-generator");

sitemap({
  alternateUrls: {
    de: "https://seriermanskalse.dk",
    es: "http://seriermanskalse.es",
    ja: "http://seriermanskalse.jp",
    fr: "http://seriermanskalse.fr",
  },
  baseUrl: "https://seriermanskalse.dk",
  ignoredPaths: ["admin"],
  extraPaths: ["/extraPath"],
  pagesDirectory: __dirname + "\\pages",
  targetDirectory: "static/",
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: ["png", "jpg"],
  pagesConfig: {
    "/login": {
      priority: "0.5",
      changefreq: "daily",
    },
  },
  sitemapStylesheet: [
    {
      type: "text/css",
      styleFile: "/test/styles.css",
    },
    {
      type: "text/xsl",
      styleFile: "test/test/styles.xls",
    },
  ],
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
