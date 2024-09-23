import globals from 'globals';
import pluginJs from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compact = new FlatCompat({});

export default [
  ...compact.extends('airbnb', 'plugin:jest/recommended'),
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
