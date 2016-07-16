var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.(woff|woff2|ttf|eot|svg)/);
var WebpackDevServer = require('webpack-dev-server');

module.exports = {
  entry: [
    './app/scripts/main.js',
  ],
  output: {
    path: 'dist',
    filename: 'js/[name].js',
    publicPath: 'http://localhost:8000',
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[hash:base64:12]', 'sass'],
    }, {
      test: /\.js$/,
      loaders: ['babel?presets[]=react&presets[]=es2015'],
      exclude: /node_modules/
    }]
  },
  plugins: [ignore],
  devServer: {
    host: '0.0.0.0',
    contentBase: './app',
    compress: true,
    hot: true,
    proxy: {
      '/api/*': 'http://localhost:8081'
    },
  }
};
