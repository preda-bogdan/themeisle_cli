/* @flow */

// const _ = require('lodash');
// const fs = require('fs');
const git = require('simple-git/promise')();
const CLI = require('clui');
const Spinner = CLI.Spinner;

const inquirer = require('../console/inquirer');
const gh = require('./github');

module.exports = {
	createRemoteRepo: async () => {
		const github = gh.getInstance();
		const answers = await inquirer.askRepoDetails();

		const data = {
			name: answers.name,
			description: answers.description,
			private: (answers.visibility === 'private'),
		};

		const status = new Spinner('Creating remote repository...');
		status.start();

		try {
			const response = await github.repos.create(data);
			return response.data.ssh_url;
		} catch (err) {
			throw err;
		} finally {
			status.stop();
		}
	},
	setupRepo: async ( url: string ) => {
		// eslint-disable-next-line max-len
		const status = new Spinner('Initializing local repository and pushing to remote...');
		status.start();

		try {
			await git.init().then(
				() => git.addRemote( 'origin', url ).then(
					// () => git.add( './*' ).then(
					// () => git.commit('Initial commit').then(
					// 	() => git.push('origin', 'master')
					// )
					// )
				)
			);
			return true;
		} catch (err) {
			throw err;
		} finally {
			status.stop();
		}
	},
};
