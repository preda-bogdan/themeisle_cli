#!/usr/bin/env node
/* @flow */
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./files');
const inquirer = require('./inquirer');

clear();
console.log(
	chalk.yellow(
		figlet.textSync( 'ThemeIsle CLI', {horizontalLayout: 'full'} )
	)
);

console.log( files.getCurrentDirectoryBase() );

const run = async () => {
	const credentials = await inquirer.askQuestion();
	console.log( credentials );
};

run();


// if ( files.directoryExists( '.git' ) ) {
// 	console.log( chalk.red( 'Already a git repository!' ) );
// 	process.exit();
// }
