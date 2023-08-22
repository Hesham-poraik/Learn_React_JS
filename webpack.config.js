/* createapp.dev */

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [ 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    open: true,
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html'
    }),
    new CopyWebpackPlugin({ 
      patterns: [ 
      { from: './src/favicon.ico' },
      ]})
  ],
}