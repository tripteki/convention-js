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
            "files": [ "**/*.jsx", "**/*.tsx", ],
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
            "rules": {

                "react/react-in-jsx-scope": "off",
            },
        },
        {
            "files": [ "**/*.ts", "**/*.tsx", ],
            "plugins": [ "@typescript-eslint", ],
            "extends": [

                "plugin:@typescript-eslint/recommended",
            ],
            "parser": "@typescript-eslint/parser",
            // "parserOptions": {},
            // "env": {},
            "rules": {

                // "indent": "off",
                // "@typescript-eslint/indent": "error",
                // "brace-style": "off",
                // "@typescript-eslint/brace-style": "error",
                "@typescript-eslint/no-var-requires": "off",
                // "keyword-spacing": "off",
                // "@typescript-eslint/keyword-spacing": "error",
                // "padding-line-between-statements": "off",
                // "@typescript-eslint/padding-line-between-statements": [ "error", { "blankLine": "always", "prev": "*", "next": [ "return", ], }, { "blankLine": "always", "prev": [ "const", "let", "var", ], "next": "*", }, { "blankLine": "any", "prev": [ "const", "let", "var", ], "next": [ "const", "let", "var", ], }, ],
                // "space-before-blocks": "off",
                // "@typescript-eslint/space-before-blocks": "error",
                // "object-curly-spacing": "off",
                // "@typescript-eslint/object-curly-spacing": "error",
                // "func-call-spacing": "off",
                // "@typescript-eslint/func-call-spacing": "error",
                // "quotes": "off",
                // "@typescript-eslint/quotes": "error",
                // "comma-dangle": "off",
                // "@typescript-eslint/comma-dangle": "error",
                // "semi": "off",
                // "@typescript-eslint/semi": "error",
                // "no-extra-semi": "off",
                // "@typescript-eslint/no-extra-semi": "error",
                "@typescript-eslint/typedef": "error",
                // "naming-convention": [ "error",
                    // { "selector": "variable", "modifiers": [ "const", ], "format": [ "UPPER_CASE", ], "leadingUnderscore": "allow", },
                    // { "selector": [ "variable", "function", ], "format": [ "camelCase", ], "leadingUnderscore": "allow", },
                    // { "selector": "interface", "format": [ "PascalCase", ], "prefix": "I", "suffix": "able", },
                    // { "selector": "class", "format": [ "PascalCase", ], },
                // ],
                // "member-ordering": [ "error", { "default": [ "signature", "field", "constructor", "set", "get", "method", ], }, ],
            },
        },
        // { "files": [ "*.php", "*.js", "*.py", "*.java", ], },
    ],

    "plugins": [

        // "jsdoc",
    ],

    "extends": [

        "eslint:recommended",
        // "plugin:jsdoc/recommended",
    ],

    // "parser": "",



    "root": true,
    "ignorePatterns": [ "**/.git/*", "**/vendor/*", "**/node_modules/*", "**/.gradle/*", ],

    "rules": {

        "eol-last": [ "error", "always", ],
        "no-multiple-empty-lines": "error",
        "no-trailing-spaces": "error",
        "indent": [ "error", 4, ],
        "no-multi-spaces": "error",
        "brace-style": [ "error", "allman", { "allowSingleLine": false, }, ],
        "no-constant-condition": "error",
        "space-unary-ops": "error",
        "keyword-spacing": [ "error", { "before": true, "after": true, }, ],
        "padded-blocks": [ "error", "never", ],
        "padding-line-between-statements": [ "error", { "blankLine": "always", "prev": "*", "next": [ "return", ], }, { "blankLine": "always", "prev": [ "const", "let", "var", ], "next": "*", }, { "blankLine": "any", "prev": [ "const", "let", "var", ], "next": [ "const", "let", "var", ], }, ],
        "space-before-function-paren": [ "error", "always", ],
        "space-before-blocks": [ "error", "always", ],
        "object-curly-newline": [ "error", "always", ],
        "object-curly-spacing": [ "error", "always", ],
        "computed-property-spacing": [ "error", "always", ],
        "array-bracket-spacing": [ "error", "always", ],
        "key-spacing": [ "error", { "beforeColon": false, "afterColon": true, }, ],
        "func-call-spacing": [ "error", "always", ],
        "newline-after-var": [ "error", "always", ],
        "function-paren-newline": [ "error", "never", ],
        "block-spacing": "error",
        "vars-on-top": "error",

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
        "arrow-body-style": [ "error", "as-needed", ],

        "no-inline-comments": "error",
        "line-comment-position": [ "error", { "position": "above", }, ],
        "spaced-comment": [ "error", "always", ],
    },
};
