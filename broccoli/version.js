'use strict';
/* eslint-env node */

const getGitInfo = require('git-repo-info');
const path = require('path');

module.exports.VERSION = (() => {
  let info = getGitInfo(path.resolve(__dirname, '..'));
  if (info.tag) {
    console.log('herr');
    return info.tag.replace(/^v/, '');
  }

  let packageVersion  = require('../package.json').version;
  let sha = info.sha || '';
  let prefix = `${packageVersion}-${(process.env.BUILD_TYPE || info.branch)}`;

  return `${prefix}+${sha.slice(0, 8)}`;
})();
