
module.exports = {
  plugins: ['jsx-a11y'],

  extends: [
    'plugin:jsx-a11y/recommended',
  ],

  rules: {
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
};
