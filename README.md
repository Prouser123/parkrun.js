# parkrun.js

![Travis Tests](https://img.shields.io/travis/com/prouser123/parkrun.js/master?label=tests)
![Codecov](https://img.shields.io/codecov/c/gh/prouser123/parkrun.js)
![docs build status](https://img.shields.io/github/workflow/status/prouser123/parkrun.js/docs?label=docs)

A JavaScript implementation of the Parkrun API gathered from reverse-engineering the official app.

## Installation

`npm i parkrun.js`

Or alternatively...

`npm i prouser123/parkrun.js` (bleeding from master, will be buggy)

## FAQ

### Upstream API Limitations

These are limitations with all services using the official parkrun API.

- Freedom Runs can only be accessed for the current user

  - 401: `Attempt to access details for AthleteId which does not match user AthleteId`

### Why is Node.js 8.10 the mininum?

We have several dependencies (as well as some code) that uses newer features, such as...

- async (`>=7.6`)
- spread syntax (`>8.5`)
- mocha 7 (chokidar, `>8.10`)

However, as of January 2020, Node.js 8.X is no longer supported for any use case, and so you should really upgrade anyway.

## Acknowledgments

<a href="https://saucelabs.com" target="_blank"><img src="https://raw.githubusercontent.com/Prouser123/parkrun.js/master/.github/powered-by-saucelabs-red.svg?sanitize=true" height="100" /></a>
