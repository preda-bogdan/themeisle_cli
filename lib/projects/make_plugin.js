const projectTemplate = require('project-template');
const files = require('../files/files');
const path = require('path');

module.exports = {
	makePlugin: () => {
		projectTemplate({
			fileExtension: 'tpl',
			templatePath: path.join(__dirname, '..', '..', 'templates', 'plugin'),
			buildPath: path.join(files.getCurrentDirectoryBase(), '..'),
			params: {
				'README.md': {
					project: 'Awesome Project'
				},
				'plugin.php': {
					project_name: 'WordPress Plugin',
					project_description: 'Awesome WordPress Plugin Project',
					project_version: '1.0.0',
					author_name: 'Bogdan Preda',
					project_slug: 'wpp_gen',
					project_namespace: 'WppGen'
				},
				'composer.json': {
					project_slug: 'wpp_gen',
					project_description: 'Awesome WordPress Plugin Project',
					author_name: 'Bogdan Preda',
					author_email: 'bogdan.preda@themeisle.com',
					git_url: 'https://github.com/bogdan.preda/wpp_gen'
				},
				'package.json': {
					project_slug: 'wpp_gen',
					project_version: '1.0.0',
					project_description: 'Awesome WordPress Plugin Project',
					author_name: 'Bogdan Preda',
					git_url: 'https://github.com/bogdan.preda/wpp_gen'
				},
				'phpcs.xml': {},
				'phpmd.xml': {},
				'phpunit.xml': {},
				'.gitignore': {},
				'.commitlintrc.js': {}
			}
		}).then(projectFiles => {
			console.log('Project generated with the following files:');
			projectFiles.forEach(file => {
				console.log(file);
			});
		}).catch(err => {
			console.error('Failed to generate project', err);
		});
	}
};