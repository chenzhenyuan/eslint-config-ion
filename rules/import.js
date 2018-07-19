module.exports = {
  plugins: ['import'],

  extends: [
    'plugin:import/recommended',
  ],

  rules: {
    'import/namespace': 'error',

    'import/no-extraneous-dependencies': 'off',

    'import/no-unresolved': 'off',

    'import/extensions': 'off',

    'import/prefer-default-export': 'warn',
  },
};
