module.exports = {
	globDirectory: '.',
	globPatterns: [
		'src/*.{html,css,js,png}',
		'src/**/*.{html,css,js,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};