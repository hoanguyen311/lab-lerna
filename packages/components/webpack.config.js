const path = require('path');
const UgligyJs = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    Another: './src/Another/index.jsx',
    Hello: './src/Hello/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    react: {
      commonjs2: 'react',
      commonjs: 'react'
    }
  }
};