var config = {
    context: __dirname + "/src",
    entry: "./main.jsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
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
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
module.exports = config;
