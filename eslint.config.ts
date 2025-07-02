// @ts-nocheck

import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: ['*', '!src']
    },
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parser: tseslint.parser
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'off'
        }
    }
]);
