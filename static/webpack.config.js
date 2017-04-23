var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        "./public/javascripts/index.js",
    ],
    output: {
        path: __dirname + '/dist/javascripts/',
        // publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader!css-loader!autoprefixer-loader!less"),
                exclude: [/node_modules/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    devServer: {
        host: "0.0.0.0",
        port: 8090
    },
    plugins: [
        new ExtractTextPlugin("./dist/stylesheets/[name].css")
    ]
}