const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      '_variables.sass': path.resolve(__dirname, 'src/_variables.sass')
    }
  }
};
