module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'index', 'sibling']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],

    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
    'sort-imports': ['error', { 'ignoreDeclarationSort': true }],
  },
};
