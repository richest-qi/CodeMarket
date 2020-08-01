
const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
    mode:"development",
    module:{
        rules:[
            {
                test:/\.(gif|png|svg|jpeg)$/,
                use:
                [
                    {
                        loader:"image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }                           
                    }
                ]
            }
        ]

    }
})
