const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

// module.exports = withImages({
//   env: {
//     NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
//   },

//   images: {
//     domains: ["https://image.tmdb.org/t/p/w200"],
//   },

//   exportPathMap: function () {
//     return {
//       "/": { page: "/" },
//     };
//   },
// });

const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  env: {
    NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
  },

  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
