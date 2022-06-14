const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /(\js|ts)i/,
                use: "ts-loader"
            },
            {
                test: /(\.s[ac]ss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
}
