module.exports = {
  extends: ['plugin:vue/vue3-recommended', '@vue/eslint-config-prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
