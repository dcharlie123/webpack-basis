/* 单页+loader */
var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path"); //nodejs的,处理成相对路径
module.exports = {
    entry: "./src/app.js",
    output: {
        path: './dist',
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
        // require('autoprefixer')({browsers:'ios >= 8'})
    ],
    module: {
        rules: [ //webpack2.0写法,1.0用loaders
            /*使用babel-loader转换ES6,npm install --save-dev babel-loader babel-core*/
            {
                test: /\.js$/,
                use: ['babel-loader'], //2.0"-loader"不能省
                /*exclude除了。。。include包括。。。*/
                // - 尽量避免 exclude，更倾向于使用 include
                // exclude:[path.resolve(__dirname,'node_modules')]//path.resolve()解析路径,“__dirname”当前运行路径
                // query:{
                //     presets:['latest']//npm install --save-dev babel-preset-latest
                // }
                exclude: /node_modules/
            },
            /*css处理,npm i --save-dev style-loader css-loader*/
            {
                test: /\.css|less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader?importLoaders=1',
                        options: {
                            // modules:true//css模块化
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    "less-loader"
                ] //webpack1.0用'style-loader!css-loader'"!"用来串联两个loader
            },
            {
                test:/\.html$/,
                use:["html-loader"]
            }
        ]
    }
}