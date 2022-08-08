const { contact: { Email } } = require("../resume");

module.exports = async (action) => {
  const clipboardy = await import("clipboardy");
  if(action === "copy") {
    clipboardy.default.writeSync(Email)
    console.log(`${Email} successfully copied to clipboard`)
  }
}
