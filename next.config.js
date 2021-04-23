// const withImages = require("next-images");
const withMDX = require("@next/mdx")();

module.exports =
  withMDX({
    env: {
      NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
    },

    // assetPrefix: 'image.tmdb.org',
    // dynamicAssetPrefix: true,

    withMDX: {
      pageExtensions: ["js", "jsx", "mdx"],
    },

    images: {
      domains: ["image.tmdb.org"],
    },

    exportPathMap: function () {
      return {
        "/": { page: "/" },
      };
    },
  })
  ;

// const nextConfig = {
//   images: {
//     domains: ["image.tmdb.org"],
//   },

//   env: {
//     NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
//   },

//   exportPathMap: function () {
//     return {
//       "/": { page: "/" },
//     };
//   },
// };

// module.exports = withPlugins([[withImages]], nextConfig);
