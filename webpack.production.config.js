var path = require('path')

var DIST_DIR = path.resolve(__dirname, 'dist')
var SRC_DIR = path.resolve(__dirname, 'src')

var config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  mode: 'production',
  rules: [
    {
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: ['/node_modules/'],
    },
    {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: ['/src/assets/favicon.ico', '/src/assets/static'],
      use: ['file-loader'],
    },
  ],
}

module.exports = config
