const path = require('path');
const babelConfig = require('./babelrc');

module.exports = {
  entry: './client/client.js',
  output: {
    path: path.resolve('./build/'),
    filename: 'client-bundle.js',
    publicPath: 'build/'
  },
  resolve: {
    extensions: ['.js'],
  },
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: Object.assign({}, babelConfig, {
            babelrc: false,
          }),
        },
        exclude: /node_modules/,
      },
    ],
  },
};