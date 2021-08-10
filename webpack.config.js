const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    contentBase: [path.join(__dirname, 'dist')],
    // hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(gif|png|svg|jpeg)$/,
        use:['file-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: './index.html',
    })
  ],
  mode: 'development',

}