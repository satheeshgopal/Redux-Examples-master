var config = {
    entry: './main.js',
    mode: "development",
    devtool: 'source-map',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {      
      port: 8080,
      static: {
         directory: './',
       },
    },
    module: {
      rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             options: {
                presets: ['env', 'stage-0', 'react']
             }
          }
       ]
    }
 }
 module.exports = config;