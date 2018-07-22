/* @flow */
const inquirer = require('inquirer');
const files = require('../files/files');

/**
 * Method to check if an input is a valid email address.
 * @param {string} input The input to be checked.
 * @return {boolean}
 */
function validateEmail( input: string ): boolean {
	if ( ! input.length ) {
		return false;
	}
	// eslint-disable-next-line max-len
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test( String( input ).toLowerCase() );
}

module.exports = {
	askGitHubCredentials: () => {
		const questions = [
			{
				name: 'username',
				type: 'input',
				message: 'Enter your GitHub e-mail address:',
				validate: function( value: string ): any {
					if ( ! validateEmail( value ) ) {
						return 'Please enter your e-mail address.';
					}
					return true;
				},
			},
			{
				name: 'password',
				type: 'password',
				message: 'Enter your password:',
				validate: function( value: string ): any {
					if ( value.length ) {
						return true;
					}
					return 'Please enter your password.';
				},
			},
		];

		return inquirer.prompt( questions );
	},

	askRepoDetails: () => {
		const argv = require('minimist')( process.argv.slice( 2 ) );

		const questions = [
			{
				type: 'input',
				name: 'name',
				message: 'Enter a name for the repository:',
				default: argv._[0] || files.getCurrentDirectoryBase(),
				validate: function( value ) {
					if (value.length) {
						return true;
					}
					return 'Please enter a name for the repository.';
				},
			},
			{
				type: 'input',
				name: 'description',
				default: argv._[1] || null,
				message: 'Optionally enter a description of the repository:',
			},
			{
				type: 'list',
				name: 'visibility',
				message: 'Public or private:',
				choices: ['public', 'private'],
				default: 'public',
			},
		];

		return inquirer.prompt( questions );
	},

	askProjectType: () => {
		const choices = [
			{
				name: 'WordPress Plugin',
				value: 'wp-plugin',
			},
			{
				name: 'WordPress Theme',
				value: 'wp-theme',
			},
			{
				name: 'Generic PHP',
				value: 'php-generic',
			},
		];

		const questions = [
			{
				name: 'project-choice',
				type: 'list',
				message: 'What project template would you like to generate?',
				choices: choices,
			},
		];

		return inquirer.prompt( questions );
	},
};
