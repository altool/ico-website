const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
   entry: path.join(__dirname, 'src/js', 'index.js'), // Our frontend will be inside the src folder
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'build.js' // The final file will be created in dist/build.js
   },
   module: {
      loaders: [{
         test: /\.styl$/, // To load the css in react
         exclude: /node_modules/,
         use: ['style-loader', 'css-loader', 'stylus-loader'],
         include: /src/
      }, {
         test: /\.jsx?$/, // To load the js and jsx files
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
            presets: ['es2015', 'react', 'stage-2']
         }
      }]
   },
   plugins: [
      new htmlPlugin({
         title: "ICO Website",
         template: "./src/templates/index.ejs",
         hash: true
      })
   ]
}
