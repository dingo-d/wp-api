var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputCss = 'styles/[name].css';

var config = {
  devtool: 'inline-source-map', // This will show line numbers where errors are accured in the terminal
  devServer: {
    historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
  },
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/', // Specify the local server port
    'webpack/hot/only-dev-server', // Enable hot reloading
    './app/index.js' // This is where Webpack will be looking for the entry index.js file
  ],
  output: {
    path: path.join(__dirname, 'public'), // This is used to specify folder for producion bundle. Will not be used here, but it's a good practice to have it
    filename: 'bundle.js' // Filename for production bundle
    // publicPath: '/'
  },
  resolve: {
    modules: ['node_modules', 'app'], // Folders where Webpack is going to look for files to bundle together
    extensions: ['*', '.js'] // Extensions that Webpack is going to expect
  },
  module: {
    // Loaders allow you to preprocess files as you require() or “load” them. Loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle frontend build steps.
    loaders: [{
      test: /\.jsx?$/, // Here we're going to use JS for react components but including JSX in case this extension is prefered
      exclude: /node_modules/, // Speaks for itself
      // Modules that help with hot reloading and ES6 transcription
      use: [{
        loader: 'react-hot'
      }, {
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }]
    }],
    rules: [{
      test: /\.(js)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Hot reloading
    new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new ExtractTextPlugin(outputCss)
  ]
}

module.exports = config;