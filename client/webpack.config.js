var webpack = require('webpack'), 
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextWebpack = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.MODE,
	entry: './src/app.js',
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename:'[name].js',
	},
	performance: {
		hints: false,
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: "babel-loader"
			},
			{
	            test: /\.scss$/,
	            use:  process.env.MODE === 'production' ? ExtractTextWebpack.extract({
                        fallback: 'style-loader',
                        use:["css-loader", "sass-loader"]
                    }) : [
                            {
                                loader:"style-loader"
                            },
                            {
                                loader: "css-loader"
                            },
                            {
                                loader: "sass-loader"
                            }
                        ]

	        },
	        { 
	        	test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2|eot)$/, 
	        	loader: "url-loader"
	        }
		]
	},

    plugins: [
        new CleanWebpackPlugin(['dist']),
		new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
			template: './index.html',
            title: 'Comments'
		}),
		process.env.MODE === 'production' ? new ExtractTextWebpack({
                filename: '[name].css',
                disable: false,
                allChunks: true,
            }) : new ExtractTextWebpack({}),
		new CopyWebpackPlugin([{
			from: 'src/images/',
			to: 'images/',
		}])
	]
}