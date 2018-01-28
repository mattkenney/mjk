const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
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
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' },
          {
              loader: 'css-loader',
              options: { minimize: true }
          },
          { loader: 'sass-loader' }
        ],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackInlineSourcePlugin(),
    new HtmlWebpackPlugin({
        inlineSource: '.js$',
        minify: {
          collapseWhitespace: true,
          preserveLineBreaks: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          sortAttributes: true
        },
        template: './src/index.html'
    }),
    new UglifyJSPlugin()
  ]
});
