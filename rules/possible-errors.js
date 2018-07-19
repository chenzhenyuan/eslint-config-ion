

module.exports = {
  rules: {
    // 禁止直接使用 Object.prototypes 的内置属性
    "no-prototype-builtins": "error",

    // 禁止在条件中使用常量表达式
    "no-constant-condition": "error",

    // 禁止空块语句
    "no-empty": "error",

    // 禁用 console
    "no-console": "error",

    // 禁止在 function 定义中出现重复的参数
    "no-dupe-args": "error",

    // 禁止正则表达式字面量中出现多个空格
    "no-regex-spaces": "error",

    // 禁用稀疏数组
    "no-sparse-arrays": "error",

    // 禁止对关系运算符的左操作数使用否定操作符
    "no-unsafe-negation": "error",

    // 禁止对 catch 子句中的异常重新赋值
    "no-ex-assign": "error",

    // 强制 typeof 表达式与有效的字符串进行比较
    "valid-typeof": "error",
  }
};