const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const postcssSimpleVars = require('postcss-simple-vars');
const postcssColorFunction = require('postcss-color-function')
const lost = require('lost')

module.exports = options => ({
	progress: true,
	colors: true,
	postcss: () => {
    return [
      postcssNested,
      autoprefixer,
			postcssSimpleVars({ variables: () => require('../src/variables') }),
      postcssColorFunction,
			lost
    ];
  },
	resolve: {
		extensions: ['', '.js'],
	},
	resolveLoader: { 
		root: options.nodeModulesPath,
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: options.srcPath,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				include: options.srcPath,
				'loaders': !options.isDev ? [
					'style-loader',
					'css-loader?modules&importLoaders=1!postcss-loader'
				] : [
					'style-loader?sourceMaps', 
					'css-loader?modules&importLoaders=1',
					'postcss-loader',
				]
			},
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
			{ 
				test: /\.handlebars$/, 
				loader: "handlebars-loader" 
			}
		]
	}
})