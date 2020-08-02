
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry:{
        index:"./src/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        chunkFilename:"[name].js",
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
                        presets:['@babel/preset-react'],
                        plugins:["babel-plugin-syntax-dynamic-import"]
                    }
                    
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'index.html')
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        runtimeChunk:"single",
        splitChunks:{
            cacheGroups:{
                vendor:{
                    name:"vendor",
                    priority:1,
                    chunks:"initial",
                    test:/[\\/]node_modules[\\/]/,
                    minChunks:1
                },
                // default:{
                //     name:"common",
                //     chunks:"initial",
                //     minChunks:2
                // }
            }
        }
    }
}
