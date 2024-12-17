import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist', 'vite.config.ts'], // Игнорируем папку dist
  },
  // Конфиг для TypeScript файлов
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: parser,
      parserOptions: {
        project: './tsconfig.json', // Путь к tsconfig.json
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks, // Плагин React Hooks
      'react-refresh': reactRefresh, // Плагин React Refresh
      '@typescript-eslint': tsEslint, // Плагин TypeScript
      prettier, // Плагин Prettier
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  // Конфиг для всех JS, JSX, TS, и TSX файлов
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      indent: ['error', 2],
      'prettier/prettier': 'error', // Правило для Prettier
    },
  },
];
