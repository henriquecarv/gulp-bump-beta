# gulp-bump-beta

Gulp plugin to bump beta version property in versioning files

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1e831726c12b40f392acff9db4571ee4)](https://app.codacy.com/app/henriquecarv/gulp-bump-beta?utm_source=github.com&utm_medium=referral&utm_content=henriquecarv/gulp-bump-beta&utm_campaign=Badge_Grade_Settings)
[![Build Status](https://dev.azure.com/henriquecarvgit/henriquecarvgit/_apis/build/status/henriquecarv.gulp-bump-beta?branchName=master)](https://dev.azure.com/henriquecarvgit/henriquecarvgit/_build/latest?definitionId=8)
[![npm](https://img.shields.io/npm/v/gulp-bump-beta.svg)](https://www.npmjs.com/package/gulp-bump-beta)
[![npm](https://img.shields.io/npm/dt/gulp-bump-beta.svg)](https://www.npmjs.com/package/gulp-bump-beta)
[![LICENSE](https://img.shields.io/github/license/henriquecarv/gulp-bump-beta.svg)](./LICENSE)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=henriquecarv/gulp-bump-beta)](https://dependabot.com)

## System Requirements

- **[NodeJS](https://nodejs.org/en/)** (version >= 10).

## Installing

- `npm i -D gulp gulp-bump-beta`

## Usage

- Create a gulpfile to run your tasks.

```javascript
const gulp = require('gulp');
const beta = require('gulp-bump-beta');

const paths = {package: './package.json', manifest: './manifest.json'};

const bumpBeta = () => {
  return gulp
    .src(Object.values(paths))
    .pipe(beta())
    .pipe(gulp.dest('./'));
};

gulp.task('bump-beta', gulp.series(bumpBeta));
```

### License

Copylefted (c) 2018 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
