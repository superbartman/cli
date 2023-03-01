const chalk = require('chalk');
const ora = require('ora')
const spinner = ora();
const validate = require('validate-npm-package-name');

const { readJsonFile, writeJsonFile, hasFile } = require('./fs');


const changePackageInfo = async (path, pkgInfo) => {
  const pkgPath = path + '/package.json';
  const isExist = await hasFile(pkgPath);
  if (!isExist) {
    return;
  }
  const pkg = await readJsonFile(pkgPath);
  pkg.name = pkgInfo.name;
  pkg.version = pkgInfo.version;
  pkg.description = pkgInfo.description;
  pkg.main = pkgInfo.main;
  pkg.keywords = pkgInfo.keywords;
  pkg.author = pkgInfo.author;
  pkg.license = pkgInfo.license;

  await writeJsonFile(pkgPath, pkg, { spaces: '\t' });
}


const isValidPackageName = (name) => {
  const { validForNewPackages } = validate(name);

  if (!validForNewPackages) {
    console.log(`name ${chalk.red(`${yellow(`"${name}"`)} is invalid`)}`);
    return false;
  }
  return true;
}

const clearConsole = (title) => {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    if (title) {
      console.log(title);
    }
  }
}

// 进度条开始
const startSpinner = (msg) => {
  spinner.text = msg;
  spinner.start()
}

// 进度条停止
const stopSpinner = (msg) => {
  spinner.stopAndPersist({
    symbol: chalk.green('✔'),
    text: msg
  })
}


module.exports = {
  changePackageInfo,
  isValidPackageName,
  clearConsole,
  startSpinner,
  stopSpinner
};
