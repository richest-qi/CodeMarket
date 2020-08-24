const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry:{
        "index":"./src/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    resolve:{
        modules:[path.resolve(__dirname,"node_modules")],
        extensions:['.js','.json']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:/src/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"template.html"
        }),
        new CleanWebpackPlugin()
    ]
}
