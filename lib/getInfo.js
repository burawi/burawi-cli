const dayjs = require("dayjs");
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const logSection = require("./logSection");
const doNext = require("./doNext")

const {
  nationality,
  languages,
  birthday,
  address,
  contact,
  links
} = require("../resume.js")

const birthdate = dayjs(birthday, "DD/MM/YYYY");
const age = dayjs().diff(birthdate, "year")

module.exports = async () => {

  const content = `
    ${nationality} | 👴 Age: ${age}years |  🏠 Address: ${address}

    📞 Contact:
        ${Object.entries(contact).map(([key, value]) => {
          return `${key}: ${value}`;
        }).join("\n\t")}

    🌐 Languages:
        ${Object.entries(languages).map(([language, proficiency]) => {
          return `${language}: ${proficiency}`;
        }).join("\n\t")}

    🔗 Links: 
        ${Object.entries(links).map(([key, value]) => {
          return `${key}: ${value}`;
        }).join("\n\t")}

  `
  logSection("Info", content);

  await doNext([ "about", "link" ])

}
