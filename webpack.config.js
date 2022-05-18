const glob = require('glob')
const path = require('path')

// class css
// event listeners

module.exports = {
  mode: 'development',
  entry: {
    'app.js': glob.sync("./src/**/*.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
};