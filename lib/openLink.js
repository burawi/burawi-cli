const prompts = require('prompts');
const open = require('open');

const { links } = require("../resume")

module.exports = async (platform) => {

  const platformKey = Object.keys(links).find((key) => key.toLowerCase() === platform?.toLowerCase().trim())
  let link;

  if(platformKey) {
    link = links[platformKey];
  } else {
    const message = platform 
      ? "It seems like I have no account in the platform you mentioned, you can rather check one of the followings:"
      : "Please choose one of the following platforms;"
    const choice = await prompts([
      {
        type: "select",
        name: "selected",
        message,
        choices: Object.entries(links).map(([ platform, link ]) => ({
          title: platform,
          value: link
        }))
      }
    ]) 
    link = choice.selected;
  }

  if(link) await open(link);

}
