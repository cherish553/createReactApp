module.exports = {
    parser: "babel-eslint",
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    plugins: [
        "react",
        "@typescript-eslint",
    ],
    rules: {
        "indent": ["error", 2], // 2个空格缩进
        "generator-star-spacing": [0], // 强制 generator 函数中 * 号周围使用一致的空格
        "consistent-return": [0], // consistent-return
        "react/forbid-prop-types": [0], //禁止某些propTypes
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
        "global-require": [0],
        "import/prefer-default-export": [0],
        "react/jsx-no-bind": [0], //JSX中不允许使用箭头函数和bind
        "react/prop-types": [0], //防止在React组件定义中丢失props验证
        "react/prefer-stateless-function": [0],
        "no-else-return": [2], // 禁止 if 语句中 return 语句之后有 else 块
        "no-restricted-syntax": [0], // 禁用特定的语法
        "import/no-extraneous-dependencies": [0],
        "no-use-before-define": [2], // 未定义前不能使用
        "jsx-a11y/no-static-element-interactions": [0],
        "no-nested-ternary": [0], // 禁用嵌套的三元表达式
        "arrow-body-style": [0], // 要求箭头函数体使用大括号
        "import/extensions": [0],
        "no-bitwise": [0], // 禁用按位运算符
        "no-cond-assign": [0], // 禁止条件表达式中出现赋值操作符
        "linebreak-style": [1], // 强制使用一致的换行风格
        "import/no-unresolved": [0],
        "require-yield": [2], // 要求 generator 函数内有 yield
        "prefer-template": [2], // 	要求使用模板字面量而非字符串连接
        "no-undef": [2], // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        "no-param-reassign": [2], // 禁止对 function 的参数进行重新赋值
        "no-useless-escape": [1], // 禁用不必要的转义字符
        "no-plusplus": [0], // 禁用一元操作符 ++ 和 --
        "no-mixed-operators": [0], // 禁止混合使用不同的操作符 
        "object-shorthand": [0], // 要求或禁止对象字面量中方法和属性使用简写语法
        "no-console": [0],
        "no-loop-func": [0], // 禁止在循环中出现 function 声明和表达式
        "class-methods-use-this": [0], // 强制类方法使用 this
        "radix": [0], // 强制在parseInt()使用基数参数
        "no-trailing-spaces": [2], // 禁用行尾空格
        "comma-dangle": [2], // 要求或禁止末尾逗号
        "no-underscore-dangle": [0], // 禁止标识符中有悬空下划线
        "react/require-default-props": [0],
        "no-unused-expressions": [2], // 禁止出现未使用过的表达式
        "react/sort-comp": [1], //强制组件方法顺序
        "max-lines": [2, 500], // 强制最大行数
        "max-len": [1, 125], // 强制一行的最大长度
        "react/jsx-boolean-value": [0], //在JSX中强制布尔属性符号
        "react/react-in-jsx-scope": [0], //使用JSX时防止丢失React
        "operator-assignment": [0], // 要求或禁止在可能的情况下使用简化的赋值操作符
        "no-fallthrough": [2], // 禁止 case 语句落空
        "react/no-array-index-key": [2], //防止在数组中遍历中使用数组key做索引
        "eqeqeq": [2], // 要求使用 === 和 !==
        "react/no-multi-comp": [0], //防止每个文件有多个组件定义
        "react/no-unused-prop-types": [0],
        "prefer-const": [0], // 要求使用 const 声明那些声明后不再被修改的变量
        "no-var": 2,
        "jsx-a11y/click-events-have-key-events": "off",
        /* ts-lint 规则 */
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "react/state-in-constructor": [0],
        "react/state-in-constructor": "off",
    },
    parserOptions: {
        "ecmaVersion": 7,
        "sourceType": "module",
        ecmaFeatures: {
            "experimentalObjectRestSpread": true
        }
    }
}