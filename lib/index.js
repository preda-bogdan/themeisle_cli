#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const github = require('./github/github');
const repo = require('./github/repo');

const inquirer = require('./console/inquirer');

clear();
console.log(chalk.yellow(figlet.textSync('ThemeIsle CLI', { horizontalLayout: 'full' })));

const getGithubToken = async () => {
	// Fetch token from config store
	let token = github.getStoredGithubToken();
	if (token) {
		return token;
	}

	// No token found, use credentials to access GitHub account
	await github.setGithubCredentials();

	// register new token
	token = await github.registerNewToken();
	return token;
};

const run = async () => {
	let response = await inquirer.askProjectType();
	console.log(response['project-choice']);
	if (response['project-choice'] === 'wp-plugin') {
		const projects = require('./projects/make_plugin');
		projects.makePlugin();
	}
	return true;

	try {
		// Retrieve & Set Authentication Token
		const token = await getGithubToken();
		github.githubAuth(token);

		// Create remote repository
		const url = await repo.createRemoteRepo();

		// Create .gitignore file
		// await repo.createGitignore();

		// Set up local repository and push to remote
		const done = await repo.setupRepo(url);
		if (done) {
			console.log(chalk.green('All done!'));
		}
	} catch (err) {
		if (err) {
			switch (err.code) {
				case 401:
					// eslint-disable-next-line max-len
					console.log(chalk.red('Couldn\'t log you in. Please provide correct credentials/token.'));
					break;
				case 422:
					// eslint-disable-next-line max-len
					console.log(chalk.red('There already exists a remote repository with the same name'));
					break;
				default:
					console.log(err);
			}
		}
	}
};

run();

// if ( files.directoryExists( '.git' ) ) {
// 	console.log( chalk.red( 'Already a git repository!' ) );
// 	process.exit();
// }