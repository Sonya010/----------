import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            semi: ["error", "always"],
            "no-unused-vars": ["error"],
            eqeqeq: ["error", "always"],
            curly: ["error", "all"],
            "arrow-spacing": ["error", { before: true, after: true }],
            "space-before-function-paren": ["error", "always"],
            "no-var": ["error"],
        },
    },
    pluginJs.configs.recommended,
];
