#! /usr/bin/env node
const colors = require("colors");
const { Command } = require('commander');
const program = new Command();

const getAbout = require("./lib/getAbout")
const getInfo = require("./lib/getInfo")
const openLink = require("./lib/openLink")
const handleEmail = require("./lib/handleEmail")
const packageJson = require("./package.json")

program
  .name('burawi')
  .description('My resume in you CLI')
  .version(packageJson.version);

program.command('about')
  .description('Get a brief yet general presentation about me')
  .action(getAbout);

program.command('info')
  .description('List my info')
  .action(getInfo);

program.command('link')
  .argument('[platform]', "The platform to open")
  .description('Open one of my links')
  .action(openLink);

program.command('email')
  .argument('[action]', "copy | send", "copy")
  .description('Copy or send email')
  .action(handleEmail);

import("update-notifier").then(({ default: updateNotifier }) => {

  updateNotifier({
    pkg: packageJson,
  }).notify({
    isGlobal: true,
    message: `Hey there! Some new things happened in my career\nPlease run ${colors.blue("npm i -g burawi")} to get them`
  });

  program.parse()

})
