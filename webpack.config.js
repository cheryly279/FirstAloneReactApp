var config = {
    context: __dirname + "/src",
    entry: "./index.jsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
module.exports = config;
