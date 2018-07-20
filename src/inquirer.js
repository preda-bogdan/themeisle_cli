/* @flow */
const inquirer = require('inquirer');
// const files = require('./files');


module.exports = {
	askQuestion: () => {
		const questions = [
			{
				name: 'username',
				type: 'input',
				message: 'Enter your GitHub username or e-mail address:',
				validate: function( value: string ): any {
					return !!value.length;
				},
			},
		];

		return inquirer.prompt( questions );
	},
};
