const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Battleship",
            filename: "index.html",
            template: "src/index.html",
        }),
    ],
};
