const box = require("cli-box");
const logSection = require("./logSection")
const doNext = require("./doNext")
const { about } = require("../resume");

module.exports = async () => {
  const boxOptions = [
    { 
      h: 10,
      w: 100,
    },
    {
      text: about,
      stretch: true,
      autoEOL: true,
    }
  ];
  logSection("About", box(...boxOptions)) ;

  await doNext([ "info", "link" ])
}
