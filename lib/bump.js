'use strict';

const bump = (file) => {
  const fileContents = String(file.contents);
  const fileJson = JSON.parse(fileContents);

  const previousVersion = fileJson.version;

  const versionArray = previousVersion.split('-beta.');
  const [stable, betaVersion] = versionArray;

  let newVersion = '';

  if (betaVersion) {
    newVersion = `${stable}-beta.${parseInt(betaVersion.slice(-1)) + 1}`;
  } else newVersion = `${stable.replace('-beta', '')}-beta.${1}`;

  fileJson.version = newVersion;

  const fileString = JSON.stringify(fileJson, null, 4);

  return {previousVersion, fileString, newVersion};
};

module.exports = bump;
