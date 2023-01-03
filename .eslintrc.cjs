require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
    "@vue/eslint-config-prettier",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
  },
};
