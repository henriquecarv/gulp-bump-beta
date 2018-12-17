'use strict';

const log = require('plugin-log');
const pluginError = require('plugin-error');
const through = require('through2');
const bump = require('./lib/bump');

const PLUGIN_NAME = 'gulp-bump-beta';

module.exports = () => {
  return through.obj((file, encoding, cb) => {
    if (file.isNull()) {
      return cb(null, file);
    }
    if (file.isStream()) {
      // eslint-disable-next-line new-cap
      return cb(new pluginError(PLUGIN_NAME, 'Streaming not supported'));
    }

    const {previousVersion, fileString, newVersion} = bump(file);

    file.contents = Buffer.from(fileString);

    log(
        `Bumped ${log.colors.cyan(previousVersion)} to ${log.colors.magenta(
            newVersion
        )} with type: ${log.colors.cyan('beta')}`
    );

    cb(null, file);
  });
};
