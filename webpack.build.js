var config = require('./webpack.config.js')

config.entry = {
  'vue-weui': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueWeui',
  libraryTarget: 'umd'
}


module.exports = config