const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlValidatePlugin = require('html-validate-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    port: 3008,
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
    }),
    new HtmlValidatePlugin('src/**/*', 'https://validator.w3.org/nu/'),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
