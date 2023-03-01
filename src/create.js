const chalk = require('chalk');
const inquirer = require('inquirer');

const { changePackageInfo, isValidPackageName, startSpinner, stopSpinner } = require('./utils');
const { currentPath } = require('./url');
const { downloadProject } = require('./download');
const { removeFile, hasFile } = require('./fs');
const { removePrompt, pkgPrompt } = require('./prompt');


const handlePackageInfo = async (projectPath, projectName, projectType) => {
  const answers = await inquirer.prompt(pkgPrompt(projectName));
  if (answers.confirm) {
    startSpinner('downloading...');

    await downloadProject(projectType, projectName);
    await changePackageInfo(projectPath, answers);

    stopSpinner(chalk.green('download successful!'));
    process.exit(1);
  }
}

const create = async (name, type = 'react-chrome-extensions', force = false) => {
  if (!isValidPackageName(name)) {
    process.exit(1);
  }
  const projectPath = currentPath + name;
  const isExist = await hasFile(projectPath);
  if (isExist) {
    if (force) {
      await removeFile(projectPath);
      handlePackageInfo(projectPath, name, type);
      return;
    }
    const { action } = await inquirer.prompt(removePrompt(name));
    if (!action) {
      console.log('the creation was canceled');
      process.exit(1);
    }
    if (action === 'remove') {
      await removeFile(projectPath);
      handlePackageInfo(projectPath, name, type);
    }
    return;
  }
  handlePackageInfo(projectPath, name, type);
}

module.exports = create;
