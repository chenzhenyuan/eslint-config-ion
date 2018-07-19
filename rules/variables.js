/**
 * 这些规则与变量声明有关
 */

module.exports = {
  globals: {
    "module"   : true,
    "require"  : true,
    "__dirname": true,

    "document" : true,
    "window"   : true,
  },

  rules: {
    // 强制或禁止变量声明语句中初始化
    "init-declarations": [ "error", "always" ],

    // 禁止删除变量
    "no-delete-var": "error",

    // 禁止变量声明覆盖外层作用域的变量
    "no-shadow": "error",

    // 禁止将标识符定义为受限的名字
    "no-shadow-restricted-names": "error",

    // 禁用未声明的变量
    "no-undef": "error",

    // 不允许初始化变量值为 undefined
    "no-undef-init": "error",

    // 禁止未使用过的变量
    "no-unused-vars": [ "warn", { "vars": "local" }],

    // 禁止在变量定义之前使用它们s
    "no-use-before-define": "error"
  }
}