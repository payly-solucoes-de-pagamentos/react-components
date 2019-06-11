// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-react", "minify", "@babel/preset-env"];

  const plugins = [
    "babel-plugin-styled-components",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties"
  ];

  return {
    presets,
    plugins
  };
};
