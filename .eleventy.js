module.exports = function (eleventyConfig) {
  // Copy static files to output
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("date", (dateObj, format = "d LLL yyyy") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Passthrough copy for elements.css
  eleventyConfig.addPassthroughCopy("src/elements.css");
  eleventyConfig.addPassthroughCopy("static");
  // eleventyConfig.addCollection("updates", function (collectionApi) {
  //   return collectionApi.getFilteredByGlob("src/updates/*.md").sort((a, b) => {
  //     return b.date - a.date;
  //   });
  // });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };
};
