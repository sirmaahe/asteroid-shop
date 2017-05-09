const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    devtool: "source-map",
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
                loader: "style-loader!css-loader!autoprefixer-loader!less",
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
        new UglifyJSPlugin()
    ]
}