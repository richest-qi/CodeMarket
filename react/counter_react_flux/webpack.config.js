const path = require('path');
const HtmlWebapckPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
   mode:'development',
   devtool:'cheap-source-map',
//    mode:'production',
    devServer:{
        port:3000,
       contentBase:[path.join(__dirname,'dist'),path.join(__dirname,'imgs')],
       hot:true
    },
    entry:{
        'index':"./src/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.join(__dirname,"dist"),
        chunkFilename:"[name].bundle.js"
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
                        plugins:["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test:/\.css$/,
                include:/src/,
                use:['style-loader','css-loader'],
            }
        ]
    },
    plugins:[
        new HtmlWebapckPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        splitChunks:{
            minSize:100,
            cacheGroups:{
                vendor:{
                    priority:1,
                    name:"vendor",
                    test:/[\\/]node_modules[\\/]/,
                    // test:/[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    minChunks:1,
                    chunks:'initial'
                },
                default:{
                    name:"common",
                    minChunks:2,
                    chunks:'initial'
                }
            }
        }
    }
}




