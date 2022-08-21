const logSection = require("./logSection")
const colors = require("colors");
const doNext = require("./doNext")
const { stage } = require("../resume");
const dayjs = require("dayjs");
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const sorter = (pa, pb) => dayjs(pb.date, "DD/MM/YYYY").diff(dayjs(pa.date, "DD/MM/YYYY"));

module.exports = async () => {

  const sorted = stage.sort(sorter);

  const content = sorted.map(position => `${colors.yellow(colors.bold(position.title))}: ${position.by}
(in ${position.date})

${colors.italic(position.description)}

${position.link}

`).join("\n");
  logSection("🏟️  On-Stage Experiences", content) ;

  await doNext([ "link", "professional", "education", "certs", "services" ])
}
