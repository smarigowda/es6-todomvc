const path = require('path');
module.exports = () => {
  return {
    context: path.resolve(__dirname, 'src'),
    entry: "./bootstrap.js",
    output: {
      filename: "bundle.js",
    },
  }
}