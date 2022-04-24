const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/tab1.js", "./src/tab2.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
