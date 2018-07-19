/**
 * 这些规则是关于风格指南的，而且是非常主观的
 */

module.exports = {
  rules: {
    // 要求调用无参构造函数时带括号
    "new-parens": "error",

    // 要求或禁止文件末尾保留一行空行
    "eol-last": ["error", "always"],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": ["error", 'prefer-double'],

    // 要求对象字面量属性名称用引号括起来
    "quote-props": ["error", "consistent-as-needed"],

    // 强制使用一致的反勾号、双引号或单引号
    "quotes": ['error', 'single'],

    // 在数组开括号后和闭括号前强制换行
    "array-bracket-newline": ["error", {
      "multiline": true,
      "minItems": 4
    }],

    // 禁止或强制在括号内使用空格
    "array-bracket-spacing": ["error", "always", {
      "objectsInArrays": false
    }],

    // 要求箭头函数体使用大括号
    "arrow-body-style": ["error", "as-needed"],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    "block-spacing": "error",

    // 大括号风格要求
    "brace-style": ["error", "stroustrup"],

    // 禁止使用一元操作符 ++ 和 --
    "no-plusplus": ["error", {
      "allowForLoopAfterthoughts": true
    }],

    // 要求或禁止在注释前有空白
    "spaced-comment": ["error", "always"],

    // 要求中缀操作符周围有空格
    "space-infix-ops": "error",

    // 要求或禁止语句块之前的空格
    "space-before-blocks": "error",

    // 要求正则表达式被包裹起来
    "wrap-regex": "error",

    // 要求方法链中每个调用都有一个换行符
    "newline-per-chained-call": ["error", {
      "ignoreChainWithDepth": 1
    }],

    // 禁止出现多个空格, Import 例外
    "no-multi-spaces": ["error", {
      exceptions: {
        "ImportDeclaration": true
      }
    }]
  }
}