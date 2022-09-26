<?php
/**
 * WordPress Beta Tester
 *
 * @package WordPress_Beta_Tester
 * @author Andy Fragen, original author Peter Westwood.
 * @license GPLv2+
 * @copyright 2009-2016 Peter Westwood (email : peter.westwood@ftwr.co.uk)
 */

/**
 * Plugin Name:       WordPress Beta Tester
 * Plugin URI:        https://wordpress.org/plugins/wordpress-beta-tester/
 * Description:       Allows you to easily upgrade to Beta releases.
 * Author:            Peter Westwood, Andy Fragen
 * Version:           3.2.2
 * Network:           true
 * Author URI:        https://blog.ftwr.co.uk/
 * Text Domain:       wordpress-beta-tester
 * Domain Path:       /languages
 * License:           GPL v2 or later
 * License URI:       https://www.opensource.org/licenses/GPL-2.0
 * GitHub Plugin URI: https://github.com/afragen/wordpress-beta-tester
 * Requires at least: 3.1
 * Requires PHP:      5.6
 */

// Exit if called directly.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once __DIR__ . '/vendor/autoload.php';
( new WPBT_Bootstrap( __FILE__ ) )->run();
