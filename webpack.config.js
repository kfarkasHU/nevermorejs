const path = require('path');

module.exports = {
  entry: './src/nevermore.js',
  output: {
    filename: 'nevermore.js',
    path: path.resolve(__dirname, 'dist'),
    library: "Nevermore",
    libraryTarget: "var"
  },
};
