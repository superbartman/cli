#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');

const packageJson = require('../package.json');
const create = require('../src/create');


program
  .version(packageJson.version, '-v, --version')
  .option('-f, --force', 'force delete the exist folder when create');

// unknown input
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp();
    console.log(chalk.red(`Unknown command ${chalk.yellow(cmd)}`));
  })

program
  .command('create [name] [type]')
  .description('create a project, [name] project name, [type] react-chrome-extensions')
  .action(function (name, type) {
    if (!name) {
      console.log(chalk.red('please input project name'));
      return;
    }
    create(name, type, program.force);
  });



program.parse(process.argv)
