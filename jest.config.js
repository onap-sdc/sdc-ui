module.exports = {
	moduleFileExtensions: [
		'js',
		'html'
	],
	setupFiles: ['<rootDir>/test/react/utils/testSetup.js'],
	globals: {
		ICON_PATH: './'
	},
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.html$': '<rootDir>/test/react/utils/htmlLoader.js'
	},
	moduleNameMapper: {
		'^.+\\.svg$': '<rootDir>/test/react/utils/svgMock.js'
	},
	coveragePathIgnorePatterns: [
		'<rootDir>/src/react/index.js',
		'<rootDir>/src/index.js'
	],
	testRegex: '/test/react/.*.(spec|test)\\.jsx?$',
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
	],
	collectCoverageFrom: [
		'src/**/*.{js,jsx}'
	],
	coverageReporters: [
		'lcov'
	]
};
