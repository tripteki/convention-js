"use strict";

module.exports =
{
    "overrides": [

        {
            "files": [ "**/*.yaml", "**/*.yml", ],
            // "plugins": [],
            "extends": [

                "plugin:yml/recommended",
            ],
            "parser": "yaml-eslint-parser",
            // "parserOptions": {},
            // "env": {},
        },
        {
            "files": [ "**/*.json", ],
            "plugins": [ "json", ],
            "extends": [

                "plugin:json/recommended",
            ],
            // "parser": "",
            // "parserOptions": {},
            // "env": {},
        },
        {
            "files": [ "**/*.vue", ],
            "plugins": [ "vue", ],
            "extends": [

                "plugin:vue/recommended",
            ],
            "parser": "vue-eslint-parser",
            // "parserOptions": {},
            // "env": {},
        },
        {
            "files": [ "**/*.jsx", ],
            "plugins": [ "react", "react-native", ],
            "extends": [

                "plugin:react/recommended",
                "plugin:react-native/all",
            ],
            // "parser": "",
            "parserOptions": {

                "ecmaFeatures": { "jsx": true, },
            },
            "env": {

                "react-native/react-native": true,
            },
        },
        { "files": [ "*.php", "*.js", "*.ts", "*.py", "*.java", ], },
    ],

    "plugins": [

        "jsdoc",
        "@typescript-eslint",
    ],

    "extends": [

        "eslint:recommended",
        "plugin:jsdoc/recommended",
        "plugin:@typescript-eslint/recommended",
    ],

    "parser": "@typescript-eslint/parser",



    "root": true,
    "ignorePatterns": [ "**/.git/*", "**/vendor/*", "**/node_modules/*", "**/.gradle/*", ],

    "rules": {

        "eol-last": [ "error", "always", ],
        "no-multiple-empty-lines": "error",
        "no-trailing-spaces": "error",
        "indent": [ "error", 4, ],
        "no-multi-spaces": "error",
        "brace-style": [ "error", "allman", { "allowSingleLine": false, }, ],
        "@typescript-eslint/no-var-requires": "off",
        "no-constant-condition": "error",
        "space-unary-ops": "error",
        "keyword-spacing": [ "error", { "before": true, "after": true, }, ],
        "padded-blocks": [ "error", "never", ],
        "padding-line-between-statements": [ "error", { "blankLine": "always", "prev": "*", "next": "return", }, ],
        "space-before-blocks": [ "error", "always", ],
        "object-curly-spacing": [ "error", "always", ],
        "array-bracket-spacing": [ "error", "always", ],
        "key-spacing": [ "error", { "beforeColon": false, "afterColon": true, }, ],
        "func-call-spacing": [ "error", "always", ],
        "newline-after-var": [ "error", "always", ],
        "function-paren-newline": [ "error", "never", ],

        "quotes": [ "error", "double", ],
        "comma-dangle": [ "error", {

            "arrays": "always",
            "objects": "always",
            "imports": "always",
            "exports": "always",
            "functions": "never",
        }, ],
        "semi": [ "error", "always", ],
        "semi-style": [ "error", "last", ],
        "semi-spacing": [ "error", { "before": false, "after": true, }, ],
        "no-extra-semi": "error",

        "no-confusing-arrow": "error",
        "implicit-arrow-linebreak": "error",
        "arrow-body-style": [ "error", "never", ],

        "no-inline-comments": "error",
        "line-comment-position": [ "error", { "position": "above", }, ],
        "spaced-comment": [ "error", "always", ],
    },
};