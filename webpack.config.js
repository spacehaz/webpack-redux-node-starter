let path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/assets/scripts')
  },
  context: __dirname,
  resolve: {
    // An array of extensions that should be used to resolve modules. For example, in order to discover CoffeeScript files, your array should contain the string
    extensions: ['.js', '.jsx', '.json', '*'],
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015']
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
