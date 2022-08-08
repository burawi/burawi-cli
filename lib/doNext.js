const prompts = require("prompts")

const choices = {
  about: { title: "Read my self-presentation", fn: () => { require("./getAbout")() } },
  info: { title: "Consult my general info", fn: () => { require("./getInfo")() } },
  link: { title: "Open one of my links in the browser", fn: () => { require("./openLink")() } },
  nothing: { title: "Nothing, thanks!", fn: () => { } },
}

module.exports = async (enabledChoiceKeys) => {

  const nextChoice = await prompts([
    {
      type: "select",
      name: "action",
      message: "What to explore next?",
      choices: [ ...enabledChoiceKeys, "nothing" ].map(key => ({
        title: choices[key].title,
        value: key,
      }))
    }
  ])

  choices[nextChoice.action]?.fn();

}
