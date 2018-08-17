module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current",
          "browsers": "defaults",
        },
        "modules": false,
        "useBuiltIns": "usage"
      }
    ],
    "@babel/preset-react",
  ],
  "plugins": [
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-syntax-dynamic-import",
    ["import-inspector", {
      "serverSideRequirePath": true,
      "webpackRequireWeakId": true
    }]
  ],
};