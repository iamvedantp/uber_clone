module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // plugins: [
    //   // Use the correct syntax for plugins
    //   ["nativewind/babel"],
    // ],
  };
};
