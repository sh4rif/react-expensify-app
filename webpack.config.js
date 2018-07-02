const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');


  const absPath = path.join(__dirname, 'public', 'dist');
  return {
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
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
          // use: [
          //   "style-loader",
          //   "css-loader",
          //   "sass-loader"
          // ]
        }
      ]
    },
    plugins: [CSSExtract],
    // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };

};


