const withImages = require("next-images");

module.exports = withImages({
  env: {
    API_SECRET: process.env.API_SECRET,
  },
});
