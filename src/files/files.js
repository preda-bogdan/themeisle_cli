/* @flow */
/**
 * Class with methods for interacting with file system.
 *
 * @since   1.0.0
 * @author  Bogdan Preda
 */

const fs = require('fs');
const path = require('path');

module.exports = {
	getCurrentDirectoryBase: () => {
		return path.basename( process.cwd() );
	},

	directoryExists: ( filePath: string ) => {
		try {
			return fs.statSync( filePath ).isDirectory();
		} catch ( err ) {
			return false;
		}
	},
};
