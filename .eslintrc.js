module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  env: {
    node: true,
  },
}
