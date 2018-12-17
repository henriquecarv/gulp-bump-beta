# gulp-bump-beta

Gulp plugin to bump beta version property in versioning files

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

const paths = { package: './package.json', manifest: './manifest.json' };

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
