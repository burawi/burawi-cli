const colors = require("colors");
const { fullname, title } = require("../resume.js");

module.exports = (sectionName, content) => {
  console.log("")
  console.log(colors.bold(fullname), " | ", colors.italic(title))
  console.log(colors.gray(sectionName))
  console.log("")
  console.log(content);
}
