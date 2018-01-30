const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, "public"),
    host: "0.0.0.0",
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
