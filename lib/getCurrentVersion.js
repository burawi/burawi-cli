const fs = require("fs");
const path = require("path")

module.exports = () => {
  const packageJsonPath = path.resolve(__dirname, "../package.json");
  const packageContent = fs.readFileSync(packageJsonPath, "utf-8");
  const parsedJson = JSON.parse(packageContent);
  return parsedJson.version;
}
