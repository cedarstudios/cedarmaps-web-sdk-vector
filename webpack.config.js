const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'cedarmaps.js',
    library: 'CedarMaps',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist', `v${require('./package.json').version}`)
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/js/rtl-plugin.js',
        to: path.resolve(__dirname, 'dist', 'rtl-plugin.js')
      },
      {
        from: './src/css/cedarmaps.css',
        to: path.resolve(__dirname, 'dist',`v${require('./package.json').version}`, 'cedarmaps.css')
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  }
}