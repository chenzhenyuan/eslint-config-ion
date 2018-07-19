module.exports = {
  plugins: ["react"],

  extends: ["eslint:recommended", "plugin:react/recommended"],

  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },

  rules: {
    "jsx-quotes": "error",

    // 遵循JSX语法缩进/格式
    "react/jsx-closing-bracket-location": "error",

    // 如果属性值为 true, 可以直接省略
    "react/jsx-boolean-value": "warn",

    // 对于没有子元素的标签来说总是自己关闭标签
    "react/self-closing-comp": "warn",

    // 按照具体规范的React.createClass 的生命周期函数书写代码
    "react/sort-comp": "error",

    // React模块名使用帕斯卡命名，实例使用骆驼式命名
    "react/jsx-pascal-case": "warn",
  }
}