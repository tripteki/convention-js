"use strict";

module.exports =
{
    "plugins": [

        "jsdoc",
        "@typescript-eslint",
        "vue",
        "react",
    ],

    "extends": [

        "eslint:recommended",

        "plugin:jsdoc/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/recommended",
        "plugin:react/recommended",
    ],

    //"parser": [

        //"@typescript-eslint/parser",
    //],



    "parserOptions": { "ecmaVersion": "latest", },



    "root": true,
    "ignorePatterns": [ "**/.git/*", "**/vendor/*", "**/node_modules/*", "**/.gradle/*", ],
    "overrides": [ { "files": [ "*.php", "*.js", "*.ts", "*.py", "*.java", ], }, ],

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
        "padding-line-between-statements": [ "error", { "blankLine": "always", "prev": "*", "next": "return", }, ],
        "space-before-blocks": [ "error", "always", ],
        "object-curly-spacing": [ "error", "always", ],
        "array-bracket-spacing": [ "error", "always", ],
        "key-spacing": [ "error", { "beforeColon": false, "afterColon": true, }, ],
        "func-call-spacing": [ "error", "always", ],
        "function-paren-newline": [ "error", "never", ],

        "quotes": [ "error", "double", ],
        "comma-dangle": [ "error", "always", ],
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