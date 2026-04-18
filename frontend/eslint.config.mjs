// @ts-check

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        ignores: ["build", "dist", ".react-router", "node_modules", "eslint.config.*js"],
    },

    js.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },

    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    reactRefresh.configs.recommended,
    reactHooks.configs.flat.recommended,
    ...tanstackQuery.configs["flat/recommended"],

    {
        files: ["**/*.{ts,tsx,js,jsx}"],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.serviceworker,
            },
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            // Vite / Fast Refresh
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

            // TypeScript
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "no-unused-vars": "off",

            // General
            "no-console": "warn",
            "no-debugger": "warn",
        },
    },
]);
