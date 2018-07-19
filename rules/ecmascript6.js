
/**
 * 这些规则只与 ES6 有关, 即通常所说的 ES2015：
 */

module.exports = {
  env: {},

  rules: {
    // 要求箭头函数体使用大括号
    "arrow-body-style": ["error", "as-needed"],

    'import/no-extraneous-dependencies': 'off',

    'import/no-unresolved': 'off',

    'import/extensions': 'off',

    'import/prefer-default-export': 'warn',
  }
}