const withImages = require("next-images");
// const withPlugins = require("next-compose-plugins");

module.exports = withImages({
  env: {
    NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
  },

  images: {
    domains: ["localhost:3000"],
  },

  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
});

// module.exports = withPlugins([[withImages]], nextConfig);
