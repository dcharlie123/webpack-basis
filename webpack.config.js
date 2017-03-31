var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:{
        main:'./src/script/a.js',
        a:'./src/script/main.js'
    },
    output:{
        path:'./dist',
        filename:'js/[name]-[chunkhash].js',
        publicPath:"http://cdn.com/"//上线地址
    },
    plugins:[
        new htmlWebpackPlugin({//用来把js生成到index里面不用手动
            filename:'index-dist.html',
            template:"index.html",
            inject:"head",//标签插入的位置
            title:"webpack",//看html的“webpack”，用ejs模板
            minify:{
                removeComments:true,//删除注释
                collapseWhitespace:true//删除空格
            }
        })
    ]
}