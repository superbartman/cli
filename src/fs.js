const chalk = require('chalk');
const fs = require('fs-extra');

const hasFile = async (path) => {
  try {
    return await fs.pathExists(path);
  } catch (error) {
    console.log(chalk.red(error));
    process.exit(1);
  }
}

const removeFile = async (path) => {
  try {
    await fs.remove(path);
  } catch (error) {
    console.log(chalk.red(error));
    process.exit(1);
  }
}

const renameFile = async (oldPath, newPath) => {
  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    console.log(chalk.red(error));
    process.exit(1);
  }
}

const readJsonFile = async (path) =>  {
  try {
    return await fs.readJson(path);
  } catch (error) {
    console.log(chalk.red(error));
    process.exit(1);
  }
}

const writeJsonFile = async (path, json, options) => {
  try {
    await fs.writeJson(path, json, options);
  } catch (error) {
    console.log(chalk.red(error));
    process.exit(1);
  }
}

module.exports = {
  hasFile,
  renameFile,
  removeFile,
  readJsonFile,
  writeJsonFile
};
