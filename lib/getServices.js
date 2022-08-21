const box = require("cli-box");
const logSection = require("./logSection")
const doNext = require("./doNext")
const { services } = require("../resume");

module.exports = async () => {
  const boxOptions = [
    { 
      h: 10,
      w: 100,
    },
    {
      text: services,
      stretch: true,
      autoEOL: true,
      hAlign: "left",
    }
  ];
  logSection("🤝 Services", box(...boxOptions)) ;

  await doNext([ "sendEmail", "copyEmail", "certs", "professional" ])
}
