const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		helloWorld: './src/helloWorld.js',
		fruit: './src/fruit.js',
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist'), // js files
		publicPath: path.resolve(__dirname, 'dist') + '/', // assets
	},
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.(jpg|png)$/,
				// type: 'asset/resource', // bundles as file
				// type: 'asset/inline', // bundles with js as base64 -> good for small sized files like svg's
				type: 'asset', // combination of above two, webpack decides in which one to use based on the file size of 8KB,
				// parser: {
				// 	dataUrlCondition: {
				// 		maxSize: 3 * 1024, // changing the default 8KB to 3KB
				// 	},
				// },
			},
			{
				test: /\.txt$/,
				type: 'asset/source',
			},
			{
				test: /\.css$/,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
			{
				test: /\.hbs$/,
				use: ['handlebars-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'hello-world.html',
			template: 'src/template.hbs',
			description: 'hey this is description for hello world',
			chunks: ['helloWorld'],
		}),
		new HtmlWebpackPlugin({
			filename: 'fruits.html',
			template: 'src/template.hbs',
			description: 'hey this is description for fruits',
			chunks: ['fruit'],
		}),
	],
};
