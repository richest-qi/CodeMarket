const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    mode:"development",
    devtool:"source-map",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                include:/src/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {   
                test:/\.css$/,
                include:/src/,
                use:['style-loader','css-loader']


            }
        ]
    }
}