module.exports = {
	moduleFileExtensions: [
		'js',
		'html'
	],
	globals: {
		ICON_PATH: './'
	},
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.html$': '<rootDir>/test/utils/htmlLoader.js'
	},
	moduleNameMapper: {
		'^.+\\.svg$': '<rootDir>/test/utils/svgMock.js'
	},
	coveragePathIgnorePatterns: [
		'<rootDir>/src/react/index.js',
		'<rootDir>/src/index.js'
	],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/'
	],
	collectCoverageFrom: [
		'src/**/*.{js,jsx}'
	],
	coverageReporters: [
		'lcov'
	]
};