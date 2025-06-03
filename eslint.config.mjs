// eslint.config.js
import eslintPluginAngular from '@angular-eslint/eslint-plugin';
import eslintPluginTemplate from '@angular-eslint/eslint-plugin-template';
import parserTemplate from '@angular-eslint/template-parser';
import stylistic from '@stylistic/eslint-plugin';
import pluginTS from '@typescript-eslint/eslint-plugin';
import parserTS from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTS,
      parserOptions: {
        project: ['./projects/demo/tsconfig.app.json', './projects/demo/tsconfig.spec.json', './projects/ngx-uikit/tsconfig.lib.json', './projects/ngx-uikit/tsconfig.spec.json'],
        sourceType: 'module'
      }
    },
    plugins: {
      '@angular-eslint': eslintPluginAngular,
      '@typescript-eslint': pluginTS,
      '@stylistic': stylistic
    },
    rules: {
      ...eslintPluginAngular.configs.recommended.rules,
      ...pluginTS.configs.recommended.rules,
      ...stylistic.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      '@typescript-eslint/explicit-function-return-type': ['error', {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false
      }],
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'double'],
      '@stylistic/comma-dangle': ['error', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',   
          exports: 'always-multiline',
          functions: 'always-multiline'
       }]
    }
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: parserTemplate
    },
    plugins: {
      '@angular-eslint/template': eslintPluginTemplate
    },
    rules: {
      ...eslintPluginTemplate.configs.recommended.rules
    }
  }
];
