const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode:"development",
    devtool:"cheap-source-map",
    devServer:{
        port:3000,
        contentBase:path.resolve(__dirname,'dist'),
    },
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
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                    
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(gif|png|svg|jpeg)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit: 1024*30,
                        fallback:"file-loader"
                    }
                }
            }
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin()
    ]
}
