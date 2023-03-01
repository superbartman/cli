
const download = require('download-git-repo');
const { currentPath } = require('./url');

const downloadProject = async function (type, name) {
  await new Promise((resolve, reject) => {
    download(`direct:https://github.com/superbartman/${type}.git`, `${currentPath}${name}`, { clone: true }, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  })
}

module.exports = {
  downloadProject,
};
