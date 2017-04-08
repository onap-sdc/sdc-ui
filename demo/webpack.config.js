const path = require('path');

module.exports = [
  {
    name: "client",
    target: "web",
  },
  {
    name: "rendering",
    target: "node",
    entry: {
      "index.html": "./index.html",
    },
    output: {
      path: path.resolve("dist"),
      filename: "[name].bundle.js"
    }
  }
]