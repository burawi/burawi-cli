#! /usr/bin/env node
const colors = require("colors");
const { Command } = require('commander');
const program = new Command();

const getAbout = require("./lib/getAbout")
const getServices = require("./lib/getServices")
const getInfo = require("./lib/getInfo")
const getProfessional = require("./lib/getProfessional")
const getEducation = require("./lib/getEducation")
const getCerts = require("./lib/getCerts")
const getStage = require("./lib/getStage")
const openLink = require("./lib/openLink")
const handleEmail = require("./lib/handleEmail")
const renderWeb = require("./lib/renderWeb")
const packageJson = require("./package.json")

program
  .name('burawi')
  .description('My resume in you CLI')
  .version(packageJson.version);

program.command('about')
  .description('Get a brief yet general presentation about me')
  .action(getAbout);

program.command('services')
  .description('Know about the services I provide')
  .action(getServices);

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

program.command('professional')
  .description('List my different professional experiences')
  .action(getProfessional);

program.command('education')
  .description('List my education path')
  .action(getEducation);

program.command('certs')
  .description('List my certifications and awards')
  .action(getCerts);

program.command('stage')
  .description('List my on-stage experiences')
  .action(getStage);

program.command('render')
  .argument('[output]', "The path to the output dir", "burawi_resume")
  .description('Render my resume to a web page')
  .action(renderWeb);

import("update-notifier").then(({ default: updateNotifier }) => {

  updateNotifier({
    pkg: packageJson,
  }).notify({
    isGlobal: true,
    message: `Hey there! Some new things happened in my career\nPlease run ${colors.blue("npm i -g burawi")} to get them`
  });

  program.parse()

})
