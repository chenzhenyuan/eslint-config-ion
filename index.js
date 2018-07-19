/**
 * off   或 0 - 关闭规则
 * warn  或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * error 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

const fs = require('fs');
const path = require('path');
const RULE_DIR_PATH = './rules';
const rules = [];
const fileList = fs.readdirSync(path.resolve(__dirname, RULE_DIR_PATH)) || [];


fileList.forEach((file) => {
  path.extname(file).toLowerCase() === '.js' && rules.push(path.resolve(__dirname, RULE_DIR_PATH, file));
});

module.exports = {
  env: {
    browser : true,
    node    : true,
    commonjs: true,
    es6     : true,
  },

  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',

    allowImportExportEverywhere: false,

    codeFrame: false,

    ecmaFeatures: {
      jsx    : true,
      modules: true,
    }
  },

  extends: rules.map(require.resolve),
};
