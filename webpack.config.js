const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'), // js files
		publicPath: path.resolve(__dirname, 'dist') + '/', // assets
	},
	mode: 'none',
	module: {
		rules: [
			{
				test: /\.(jpg|png)$/,
				type: 'asset/resource',
			},
		],
	},
};
