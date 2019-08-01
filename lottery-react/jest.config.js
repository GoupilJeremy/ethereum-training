module.exports = {
    "moduleFileExtensions": ["js", "jsx"],
    "moduleDirectories": ["node_modules", "bower_components", "shared"],
    "moduleNameMapper": {
        "^js(.*)$": "<rootDir>/app/javascript/$1",
        "^vendor(.*)$": "<rootDir>/vendor/$1"
    },
    bail: 1,
    verbose: true,
    setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
};