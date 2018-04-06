# [webpack-pug-static-site](https://bitbucket.org/intositeme/webpack-pug-static-site)
[![Packagist](https://img.shields.io/packagist/vpre/roots/sage.svg?style=flat-square)](https://packagist.org/packages/roots/sage)
[![devDependency Status](https://img.shields.io/david/dev/roots/sage.svg?style=flat-square)](https://david-dm.org/roots/sage#info=devDependencies)
[![Build Status](https://img.shields.io/travis/roots/sage.svg?style=flat-square)](https://travis-ci.org/roots/sage)

Sage is a WordPress starter theme with a modern development workflow.

## Features

* Sass for stylesheets
* Modern JavaScript
* [Webpack](https://webpack.github.io/) for compiling assets, optimizing images, and concatenating and minifying files
* [Browsersync](http://www.browsersync.io/) for synchronized browser testing
* CSS framework : [Bootstrap 4](https://getbootstrap.com/)
* Font Awesome (optional)

## Requirements

Make sure all dependencies have been installed before moving on:

* [Node.js](http://nodejs.org/) >= 6.9.x
* [Yarn](https://yarnpkg.com/en/docs/install)

## File structure

```shell
themes/your-theme-name/   # → Root of your Project
├── dist/                 # → Built Project assets (never edit)
├── node_modules/         # → Node.js packages (never edit)
├── package.json          # → Node.js dependencies and scripts
├── resources/            # → Project assets and templates
│   ├── assets/           # → Front-end assets
│   │   ├── config.json   # → Settings for compiled assets
│   │   ├── build/        # → Webpack and ESLint config
│   │   ├── fonts/        # → Project fonts
│   │   ├── images/       # → Project images
│   │   ├── scripts/      # → Project JS
│   │   └── styles/       # → Project stylesheets
│   └── templates/        # → Project Jade/Pug templates
│       ├── layouts/      # → Base templates
│       └── partials/     # → Partial templates
```

## Project development

* Run `yarn` from the Project directory to install dependencies
* Update `resources/assets/config.json` settings:
  * `devUrl` should reflect your local development hostname
  * `staticAppendPath` should reflect your online folder path to append to asset paths
  * `staticPages` Array should include Static [Jade/HTML](https://pugjs.org/api/getting-started.html) pages to be exported into HTML

### Build commands

* `yarn run start` — Compile assets when file changes are made, start Browsersync session
* `yarn run build` — Compile and optimize the files in your assets directory
* `yarn run build:production` — Compile assets for production
* `yarn run build:export` — Compile assets for production, Append static path to asset paths

