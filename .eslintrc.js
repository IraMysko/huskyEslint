module.exports = {
  extends: [ "react-app" ],
  rules: {
    "array-bracket-spacing": [ "warn", "always" ],
    "arrow-spacing": "warn",
    "computed-property-spacing": [ "error", "never" ],
    "eol-last": [ "warn", "always" ],
    indent: [
      "error",
      2,
      {
        ignoredNodes: [ "TemplateLiteral" ],
      },
    ],
    "jsx-quotes": [ "error", "prefer-double" ],
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 1,
      },
    ],
    "object-curly-newline": [
      "warn",
      {
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
        },
        ImportDeclaration: "never",
        ObjectExpression: "always",
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
    "object-curly-spacing": [ "warn", "always" ],
    "object-property-newline": "error",
    quotes: [ "warn", "double" ],
    semi: [ "error", "always" ],
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: true,
        minKeys: 6,
        natural: true,
      },
    ],
    "space-before-blocks": "warn",
    "space-before-function-paren": [ "warn", "always" ],
    "space-in-parens": [ "warn", "never" ],
    "space-infix-ops": [
      "error",
      {
        int32Hint: false,
      },
    ],
    "template-curly-spacing": "off",
  },
};
  
