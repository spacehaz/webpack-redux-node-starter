const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './app/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/assets/scripts')
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '*'],
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['./app/assets/styles']
          }
        }
      ]
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg|otf|gif)$/,
      loader: 'url-loader?limit=100000'
    }]
  }
}
