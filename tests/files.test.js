/**
 * Test for files.js
 *
 * @since   1.0.0
 * @author  Bogdan Preda
 */

test( 'Files.getCurrentDirectoryBase', () => {
	const Files = require('../lib/files/files');
	expect( Files.getCurrentDirectoryBase() ).toBe( 'ti_cli' );
} );


test( 'Files.directoryExists', () => {
	const Files = require('../lib/files/files');
	expect( Files.directoryExists('.git') ).toBe( true );
	expect( Files.directoryExists('lib') ).toBe( true );
	expect( Files.directoryExists('src') ).toBe( true );
	expect( Files.directoryExists('zzz') ).toBe( false );
} );
