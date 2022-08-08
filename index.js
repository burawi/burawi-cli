#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();

const getCurrentVersion = require("./lib/getCurrentVersion");

const getAbout = require("./lib/getAbout")
const getInfo = require("./lib/getInfo")
const openLink = require("./lib/openLink")
const handleEmail = require("./lib/handleEmail")

const version = getCurrentVersion();

program
  .name('burawi')
  .description('My resume in you CLI')
  .version(version);

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

program.parse();
