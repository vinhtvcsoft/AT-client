module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "plugins": ["react", "@typescript-eslint"],
    "parserOptions": {
        "ecmaFeatures": {
            jsx: true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
    "ignorePatterns": ["src/test/*", ".eslintrc.js"],
    "rules": {
        // "global-require": 1
    }
}
