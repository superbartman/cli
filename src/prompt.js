const chalk = require('chalk');

const pkgPrompt = (name) => {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'package name',
      default: name,
      filter (value) {
        return value.trim()
      }
    },
    {
      type: 'input',
      name: 'version',
      message: 'version',
      default: '0.0.1',
      filter (value) {
        return value.trim()
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'description',
      filter (value) {
        return value.trim()
      }
    },
    {
      type: 'input',
      name: 'main',
      message: 'entry point',
      default: 'index.js',
      filter (value) {
        return value.trim()
      }
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'keywords',
      filter (value) {
        return value.trim()
      }
    },
    {
      type: 'input',
      name: 'author',
      message: 'author',
      filter (value) {
        return value.trim()
      }
    },
    {
      type: 'input',
      name: 'license',
      message: 'license',
      default: 'ISC',
      filter (value) {
        return value.trim()
      }
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Is this ok?',
      default: true
    }
  ]
}

const removePrompt = (name) => {
  return [
    {
      name: 'action',
      type: 'list',
      message: `${chalk.yellow(`${name}`)} folder already exists, please select`,
      choices: [
        { name: 'Delete', value: 'remove' },
        { name: 'Cancel', value: false }
      ]
    }
  ]
}

module.exports = {
  pkgPrompt,
  removePrompt,
};
