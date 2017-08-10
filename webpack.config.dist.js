var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  externals: {
    react: 'React'
  },

  // TODO: use your component name here
  output: {
    filename: 'dist/react-ui.js',
    libraryTarget: 'umd',
    library: 'ReactUI'
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
