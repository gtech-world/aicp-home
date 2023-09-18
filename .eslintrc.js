module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/alt-text': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/button-has-type': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
};
