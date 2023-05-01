module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'arrow-body-style': 'error',
    'arrow-spacing': ['warn', { before: true, after: true }],
    'comma-dangle': 'off',
    'comma-spacing': 'error',
    'comma-style': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'dot-location': ['error', 'property'],
    eqeqeq: 'error',
    'handle-callback-err': 'off',
    indent: 'off',
    'import/exports-last': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, peerDependencies: false },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'keyword-spacing': 'error',
    'max-nested-callbacks': ['error', { max: 2 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'max-params': ['error', { max: 4 }],
    'no-console': 'warn',
    'no-empty-function': 'warn',
    'no-floating-decimal': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'no-nested-ternary': 'warn',
    'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
    'no-trailing-spaces': ['error'],
    'no-var': 'error',
    'no-void': 'off',
    'no-duplicate-imports': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: ['error', 'single'],
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'vars-on-top': 'off',
    yoda: 'error',
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    '.turbo',
    '.next',
    'public',
  ],
  reportUnusedDisableDirectives: true,
};
