const logSection = require("./logSection")
const colors = require("colors");
const doNext = require("./doNext")
const { certs } = require("../resume");
const dayjs = require("dayjs");
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const sorter = (pa, pb) => dayjs(pb.date, "MM/YYYY").diff(dayjs(pa.date, "MM/YYYY"));

module.exports = async () => {

  const sorted = certs.sort(sorter);

  const content = sorted.map(position => `${colors.yellow(colors.bold(position.by))}: ${colors.underline(position.name)}
(in ${position.date})
${position.link}

`).join("\n");
  logSection("📜 Certifications & Awards", content) ;

  await doNext([ "link", "stage", "education", "services", "professional" ])
}
