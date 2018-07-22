<?php
/**
 * Plugin Name: <%- @project_name %>
 * Plugin URI: https://themeisle.com
 * Description: <%- @project_description %>.
 * Version: <%- @project_version %>
 * Author: <%- @author_name %>
 * Author URI: https://themeisle.com/
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: <%- @project_slug %>
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require __DIR__ . '/vendor/autoload.php';

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( '<%- @project_namespace %>_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in <%- @project_namespace %>\Core\Activator
 */
function activate_<%- @project_slug %>() {
	<%- @project_namespace %>\Core\Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in <%- @project_namespace %>\Core\Deactivator
 */
function deactivate_<%- @project_slug %>() {
	<%- @project_namespace %>\Core\Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_<%- @project_slug %>' );
register_deactivation_hook( __FILE__, 'deactivate_<%- @project_slug %>' );
/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_<%- @project_slug %>() {

	define( '<%- @project_namespace %>_PATH', plugin_dir_path( __FILE__ ) );
	define( '<%- @project_namespace %>_URL', plugin_dir_url( __FILE__ ) );

	$plugin = new \<%- @project_namespace %>\Core\Main();
	$plugin->run();
}

/**
 * Autoloader function.
 *
 * @param string $class Class name.
 *
 * @return bool Loading status.
 */
function <%- @project_slug %>_namespace_autoload( $class ) {
	$prefix = '<%- @project_namespace %>\\';

	$base_dir = __DIR__ . '/';

	$len = strlen( $prefix );
	if ( strncmp( $prefix, $class, $len ) !== 0 ) {
		return false;
	}

	$relative_class = substr( $class, $len );

	$file = $base_dir . str_replace( '\\', '/', $relative_class ) . '.php';
	$file = strtolower( $file );
	if ( file_exists( $file ) ) {
		require $file;
	}
	return true;
}

spl_autoload_register( '<%- @project_slug %>_namespace_autoload' );

run_<%- @project_slug %>();
