const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env)=>{
    const isProduction = env === 'production';
    // const CSSExtract = new ExtractTextPlugin('styles.css');
    return{
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public','dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },{
                test:/\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    {
                        loader: "css-loader",
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options:{
                            sourceMap:true
                        }
                    }


                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "styles.css",
                chunkFilename: "[id].css"
            })
        ],
        devtool: isProduction? 'source-map' :'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback:true,
            publicPath:'/dist/'
        }

    };
};
