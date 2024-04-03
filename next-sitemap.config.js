// next-sitemap.config.js

const siteMetadata = require("./src/utils/siteMetadata");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
};
