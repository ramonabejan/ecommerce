var webpack = require('webpack'),
       path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '/scripts',
    entry: {
        app: './app.js',
        vendor: ['angular']  
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'scripts/challenge.bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          },

            { test: /\.(ttf|txt?)(\?[a-z0-9]+)?$/, loader: "file-loader?name=styles/font/[name].[ext]"},
            { test: /\.(jpg|jpeg|png?)(\?[a-z0-9]+)?$/, loader: "file-loader?name=styles/images/[name].[ext]"},
            { test: /\.(svg?)(\?[a-z0-9]+)?$/, loader: "file-loader?name=styles/svg/[name].[ext]"}

        ]
      },


    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'scripts/vendor.bundle.js' }),

        new ExtractTextPlugin("./styles/main.css")
        
      
        
    ]   

};


if (process.env.NODE_ENV == 'production') {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false     

        }))
}
