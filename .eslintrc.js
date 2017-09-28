module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true,
        }
    },

    "extends": [
        "eslint:recommended",
        "@eleks/eleks",
        "plugin:react/recommended"
    ],

    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true
    },

    "globals": {
        "ENV": false
    },

    "plugins": [
      "react"
    ]
};