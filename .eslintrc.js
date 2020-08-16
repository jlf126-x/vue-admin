module.exports = {
  root: true,
  env: {
    node: true
  },
<<<<<<< HEAD
  extends: ["plugin:vue/essential", "eslint:recommended", 
  //"@vue/prettier"
],
=======
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
>>>>>>> ae7f0a1a06b0139e932e9d81e36f589f8244ac1c
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
<<<<<<< HEAD
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "space-before-function-paren": 0
=======
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
>>>>>>> ae7f0a1a06b0139e932e9d81e36f589f8244ac1c
  }
};
