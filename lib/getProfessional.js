const logSection = require("./logSection")
const colors = require("colors");
const doNext = require("./doNext")
const { professional } = require("../resume");
const dayjs = require("dayjs");
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const parseEntries = ([ company, positions ]) => positions.map(position => ({
  from: position.from,
  to: position.to ?? colors.cyan("present ⭐"),
  title: position.title,
  description: position.description,
  company,
}))

const companiesColors = {
  "Think-it": "cyan",
  "Tildah": "cyan",
  "Craft Foundry": "gray",
  "Armada Delivery Solutions": "blue",
  "TakiAcademy": "blue",
  "Info Langue Sousse": "green"
}

const sorter = (pa, pb) => dayjs(pb.from, "MM/YYYY").diff(dayjs(pa.from, "MM/YYYY"));

module.exports = async () => {
  const positions = Object.entries(professional).map(parseEntries).flat().sort(sorter);

  const content = positions.map(position => `at ${colors[companiesColors[position.company] ?? "white"](colors.bold(position.company))}: ${colors.underline(position.title)}
(from ${position.from} to ${position.to})
${colors.italic(position.description ?? "")}

`).join("\n");
  logSection("💻 Professional Experience", content) ;

  await doNext([ "link", "education", "certs", "stage", "services", "sendEmail", "copyEmail" ])
}
