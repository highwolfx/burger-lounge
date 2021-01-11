# burger-lounge
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This is a NodeJS based project that allows a user to add burgers to a database and mark them as devoured.


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)


## Installation

Download, clone, or fork the repo and run an `npm install` command in the folder directory. This will install the dependencies needed for NodeJS to run the application as listed in `package.json`. In addition, a local instance of a MySQL server must be set up and configured. There is a `config-example.js` file in the `config` folder that needs to be configured before the application can run properly. In addition, it needs to be renamed to `config.js` for NodeJS to recognize it.

 * [`express`](https://www.npmjs.com/package/express) allows the application to utilize express.
 * [`mysql`](https://www.npmjs.com/package/mysql) allows the application to establish connections.
 * [`handlebars`](https://www.npmjs.com/package/handlebars) allows for use of templates in viewing the application.

To start the application, run `node index.js` on the command line.

Alternatively, visit the online version deployed on Heroku [here](https://burger-eater-app-1.herokuapp.com/).



## Usage

To start the application, run `node index.js` on the command line or [visit the deployed version on Heroku](https://burger-eater-app-1.herokuapp.com/).


Burgers that have been added to the list show up on the left. Burgers that have been devoured show up on the right.

At the bottom, you may add burgers to be devoured by typing its name in the form box and hitting submit.

Each "DEVOUR" button once clicked will move a burger from the "to be eaten" list to the "already eaten" list.

<p align="center">
    <img alt="GIF of GUI" src="https://raw.githubusercontent.com/highwolfx/burger-lounge/main/public/assets/GUI.gif">
</p>

## License

Licensed under the [MIT](LICENSE.txt) license.


## Credits
The package `express` for NodeJS can be found [here](https://www.npmjs.com/package/express).

The package `mysql` for NodeJS can be found [here](https://www.npmjs.com/package/mysql).

The package `handlebars` for NodeJS can be found [here](https://www.npmjs.com/package/handlebars).


## Questions
GitHub: [highwolfx](https://github.com/highwolfx/)

Email: seanchangx@gmail.com
