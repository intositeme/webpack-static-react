const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');
const userConfig = require('../config');

const pages = userConfig.staticPages;
const pagesPlugins = [];

_.each(pages, (value) => {
  pagesPlugins.push(
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: (value == 'index')? 'index.html' : `${value}/index.html`,
      minify: {
        caseSensitive: true,
        collapseWhitespace: false,
      },
      template: path.resolve(__dirname, `../templates/${value}.pug`),
    })
  );
});

module.exports = {
  plugins: pagesPlugins,
};
