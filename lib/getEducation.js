const logSection = require("./logSection")
const colors = require("colors");
const doNext = require("./doNext")
const { education } = require("../resume");

const sorter = (pa, pb) => pb.from - pa.from;

module.exports = async () => {
  const sorted = education.sort(sorter);

  const content = sorted.map(position => `${colors.yellow(colors.bold(position.institution))}: ${colors.underline(position.title)}
(from ${position.from} to ${position.to})

`).join("\n");
  logSection("🎓 Education Path", content) ;

  await doNext([ "link", "certs", "stage", "services" ])
}
