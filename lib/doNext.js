const prompts = require("prompts")

const choices = {
  about: { title: "Read my self-presentation", fn: () => { require("./getAbout")() } },
  info: { title: "Consult my general info", fn: () => { require("./getInfo")() } },
  link: { title: "Open one of my links in the browser", fn: () => { require("./openLink")() } },
  sendEmail: { title: "Send me an e-mail", fn: () => { require("./handleEmail")("send") } },
  copyEmail: { title: "Copy my e-mail address to you clipboard", fn: () => { require("./handleEmail")("copy") } },
  professional: { title: "Consult my professinal experiences", fn: () => { require("./getProfessional")() } },
  education: { title: "Consult my education path", fn: () => { require("./getEducation")() } },
  certs: { title: "Consult my certifications and awards", fn: () => { require("./getCerts")() } },
  stage: { title: "I had some on-stage experiences, You can see them here!", fn: () => { require("./getStage")() } },
  services: { title: "Get an idea about the services I provide", fn: () => { require("./getServices")() } },
  nothing: { title: "Nothing, thanks!", fn: () => { } },
}

module.exports = async (enabledChoiceKeys) => {

  console.log(" ")
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
