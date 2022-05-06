const glob = require('glob')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'app.js': glob.sync("./src/**/*.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  // module: {
  //   rules: [
  //     {
  //       test: require.resolve('./src/scripts/templates/filterAppliance.js'),
  //       use: 'imports-loader?wrapper=window',
  //     },
  //    {
  //      test: require.resolve('./src/scripts/tags.js'),
  //      use:
  //        'exports-loader?type=commonjs&exports=pushApplianceTag,multiple',
  //    },
  //   ],
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     join: ['lodash', 'join'],
  //   }),
  // ],
};