const webpack = require('webpack')

const config = {
  entry: ['./index.js'],
  output: {
    path: __dirname,
    filename: 'build.js',
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
}

module.exports = config
