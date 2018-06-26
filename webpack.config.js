const path = require('path');

const absPath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/app.js',
  // entry: './src/playground/hoc.js',
  // entry: './src/playground/redux-expensify.js',
  // entry: './src/playground/destructuring.js',
  output: {
    path: absPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: absPath,
    historyApiFallback: true
  }
};

