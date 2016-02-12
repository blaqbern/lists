module.exports = {
  "rules": {
    "react/jsx-no-bind": [1, { "ignoreRefs": true }],
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": ["react"]
};
