var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '.'),
    watchContentBase: true,
    compress: true,
    port: 9000
  }
};
